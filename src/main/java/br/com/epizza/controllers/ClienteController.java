package br.com.epizza.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.epizza.models.Cliente;
import br.com.epizza.repositories.ClienteRepository;

@Controller
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepo;

	
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String login(Model model) {				
		return "login";
	}
	
	@RequestMapping(value="/novoCliente", method=RequestMethod.GET)
	public String novoCliente(Model model) {		
		return "novoCliente";
	}
	
	@RequestMapping(value="/salvarCliente", method=RequestMethod.GET)
	public String salvarProduto(@RequestParam String email, 
								@RequestParam String senha,
								@RequestParam String nomeFantasia,
								@RequestParam String razaoSocial) {
		Cliente cliente = new Cliente();
		cliente.setEmail(email);
		cliente.setSenha(senha);
		cliente.setNomeFantasia(nomeFantasia);
		cliente.setRazaoSocial(razaoSocial);
		clienteRepo.save(cliente);
		
		return "redirect:/login";
	}
	
	@RequestMapping(value="/autenticar", method=RequestMethod.GET)
	public String autenticar(@RequestParam String email, 
							 @RequestParam String senha,
							 Model model,
							 HttpSession session) {
		
		Cliente clienteLogin = new Cliente();
		clienteLogin = this.login(email, senha);
		
		if(clienteLogin == null) {
			model.addAttribute("erro", "Login ou senha inválidos.");
			return "login";
		} else {
			session.setAttribute("emailcliente", clienteLogin.getEmail());
			session.setAttribute("idcliente", clienteLogin.getId());
			session.setAttribute("cliente", clienteLogin);
			return "redirect:./home";
		}
		
	}
	
	@RequestMapping(value="/home", method=RequestMethod.GET)
	public String home(Model model) {				
		return "./home";
	}
	
	private Cliente login(String email, String senha) {
		try {			
			
			Cliente cliente = clienteRepo.findOneByemail(email);
			if(cliente != null){
				//BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
				
				if(senha.equals(cliente.getSenha())) {
					return cliente;
				}
			}
			return null;
		} catch (Exception e) {
			return null;
		}
	}
}
