package br.com.epizza.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.epizza.models.Categoria;
import br.com.epizza.models.Cliente;
import br.com.epizza.repositories.CategoriaRepository;
import br.com.epizza.repositories.ClienteRepository;

@Controller
public class CategoriaController {
	
	@Autowired
	private CategoriaRepository categoriaRepo;
	
	@Autowired
	private ClienteRepository clienteRepo;
	
	@RequestMapping("/novaCategoria")
	public String novaCategoria(Model model) {
		return "novaCategoria";
	}
	
	@RequestMapping(value="/salvarCategoria", method=RequestMethod.GET)
	public String salvarCategoria(@RequestParam String nome,
								  HttpSession session) {
		Categoria categoria = new Categoria();
		categoria.setNome(nome);
		
		Cliente cliente = clienteRepo.findOneByid(session.getAttribute("idcliente").toString());
		categoria.setCliente(cliente);
		categoriaRepo.save(categoria);
		
		return "redirect:/categorias";
	}
	
	@RequestMapping(value="/categorias", method=RequestMethod.GET)
	public String buscarTodasCategorias(Model model, HttpSession session) {
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		model.addAttribute("categorias", categoriaRepo.findAllBycliente(clienteLogado));
		//Retorna html do produto
		return "categorias";
	}
}
