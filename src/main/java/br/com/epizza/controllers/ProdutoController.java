package br.com.epizza.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.epizza.models.Categoria;
import br.com.epizza.models.Cliente;
import br.com.epizza.models.Produto;
import br.com.epizza.repositories.CategoriaRepository;
import br.com.epizza.repositories.ProdutoRepository;

@Controller
public class ProdutoController {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@Autowired
	private CategoriaRepository categoriaRepo;
	
	@RequestMapping(value="/produtos", method=RequestMethod.GET)
	public String buscarTodosProdutos(Model model, HttpSession session) {
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
		model.addAttribute("produtos", produtoRepository.findAll());
		//Retorna html do produto
		return "produtos";
	}
	
	@RequestMapping("/novoProduto")
	public String novoProduto(Model model, HttpSession session) {
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
		model.addAttribute("categorias", categoriaRepo.findAllBycliente(clienteLogado));
		model.addAttribute("produtos", produtoRepository.findAll());
		
		return "novoProduto";
	}
	
	@RequestMapping(value="/salvarProduto", method=RequestMethod.GET)
	public String salvarProduto(@RequestParam String nome, 
								@RequestParam String descricao,
								@RequestParam Double preco,
								@RequestParam Boolean disponivel,
								@RequestParam Categoria categoria,
								Model model,
								HttpSession session) {
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		Produto novoProduto = new Produto();
		novoProduto.setNome(nome);
		novoProduto.setDescricao(descricao);
		novoProduto.setPreco(preco);
		novoProduto.setDisponivel(disponivel);
		novoProduto.setCategoria(categoria);
		novoProduto.setCliente(clienteLogado);
		produtoRepository.save(novoProduto);
		
		model.addAttribute("produtos", produtoRepository.findAll());
		
		return "redirect:/novoProduto";
	}
	
	@RequestMapping(value="/mostrarProduto-{id}")
	public String mostrarProduto(@PathVariable String id, Model model) {
		
		Produto prod = new Produto();
		prod = produtoRepository.findOneByid(id);
		
		model.addAttribute("produto", produtoRepository.findOneByid(id));
		
		return "mostrarProduto";
	}
}
