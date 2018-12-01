package br.com.epizza.controllers;

import java.util.List;

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
import br.com.epizza.repositories.ClienteRepository;

@Controller
public class CategoriaController {
	
	@Autowired
	private CategoriaRepository categoriaRepo;
	
	@Autowired
	private ClienteRepository clienteRepo;
	
	@RequestMapping("/novaCategoria")
	public String novaCategoria(Model model, HttpSession session) {
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
		
		return "novaCategoria";
	}
	
	@RequestMapping(value="/salvarCategoria", method=RequestMethod.GET)
	public String salvarCategoria(@RequestParam String nome,
								  @RequestParam String ordem,
								  @RequestParam Boolean disponivel,
								  HttpSession session) {
		Categoria categoria = new Categoria();
		categoria.setNome(nome);
		
		Cliente cliente = clienteRepo.findOneByid(session.getAttribute("idcliente").toString());
		categoria.setCliente(cliente);
		categoria.setOrdem(ordem);
		categoria.setDisponivel(disponivel);
		categoriaRepo.save(categoria);
		
		return "redirect:/categorias";
	}
	
	@RequestMapping(value="/atualizarCategoria", method=RequestMethod.GET)
	public String atualizarCategoria(@RequestParam String id, 
								@RequestParam String nome, 
								@RequestParam String ordem,	
								@RequestParam Boolean disponivel,
								Model model,
								HttpSession session) {
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		Categoria categoriaExistente = categoriaRepo.findOneByid(id);
		categoriaExistente.setNome(nome);
		categoriaExistente.setOrdem(ordem);
		categoriaExistente.setDisponivel(disponivel);

		categoriaRepo.save(categoriaExistente);
		
		model.addAttribute("categorias", categoriaRepo.findAllByOrderByOrdemAsc(clienteLogado));
		
		return "redirect:/categorias";
	}
	
	@RequestMapping(value="/categorias", method=RequestMethod.GET)
	public String buscarTodasCategorias(Model model, HttpSession session) {
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
		model.addAttribute("categorias", categoriaRepo.findAllByOrderByOrdemAsc(clienteLogado));
		//Retorna html do produto
		return "categorias";
	}
	
	@RequestMapping(value="/mostrarCategoria-{id}")
	public String mostrarProduto(@PathVariable String id, Model model, HttpSession session) {
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
				
		model.addAttribute("categoria", categoriaRepo.findOneByid(id));		
		
		return "mostrarCategoria";
	}
}
