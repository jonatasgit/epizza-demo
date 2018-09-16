package br.com.epizza.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.epizza.models.Categoria;
import br.com.epizza.models.Produto;
import br.com.epizza.repositories.ProdutoRepository;

@Controller
public class ProdutoController {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@RequestMapping(value="/produtos", method=RequestMethod.GET)
	public String buscarTodosProdutos(Model model) {
	
		model.addAttribute("produtos", produtoRepository.findAll());
		//Retorna html do produto
		return "produtos";
	}
	
	@RequestMapping("/novoProduto")
	public String novoProduto(Model model) {
		return "novoProduto";
	}
	
	@RequestMapping(value="/salvarProduto", method=RequestMethod.GET)
	public String salvarProduto(@RequestParam String nome, 
								@RequestParam String descricao,
								@RequestParam String preco) {
		Produto novoProduto = new Produto();
		novoProduto.setNome(nome);
		novoProduto.setDescricao(descricao);
		novoProduto.setPreco(preco);
		produtoRepository.save(novoProduto);
		
		return "redirect:/mostrarProduto/" + novoProduto.getId();
	}
	
	@RequestMapping(value="/mostrarProduto/{id}")
	public String mostrarProduto(@PathVariable String id, Model model) {
		
		Produto prod = new Produto();
		prod = produtoRepository.findOneByid(id);
		
		model.addAttribute("produto", produtoRepository.findOneByid(id));
		
		return "mostrarProduto";
	}
}
