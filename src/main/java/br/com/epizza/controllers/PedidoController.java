package br.com.epizza.controllers;

import java.time.LocalDateTime;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.epizza.models.Categoria;
import br.com.epizza.models.Cliente;
import br.com.epizza.models.Pedido;
import br.com.epizza.models.Produto;
import br.com.epizza.repositories.CategoriaRepository;
import br.com.epizza.repositories.ClienteRepository;
import br.com.epizza.repositories.PedidoRepository;
import br.com.epizza.repositories.ProdutoRepository;



@Controller
public class PedidoController {
	
	@Autowired
	ProdutoRepository produtoRepository;
	@Autowired
	ClienteRepository clienteRepository;
	@Autowired
	CategoriaRepository categoriaRepository;
	@Autowired
	PedidoRepository pedidoRepository;
	
	@RequestMapping(value="/pedidos")
	public String visualizarPedidos(Model model, HttpSession session) {
		
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
		model.addAttribute("pedidosEnviados", pedidoRepository.findAllByClienteAndStatusOrderByDataAsc(clienteLogado, "Enviado"));
		model.addAttribute("pedidosRecebidos", pedidoRepository.findAllByClienteAndStatusOrderByDataAsc(clienteLogado, "Recebido"));
		
		return "pedidos";
	}
	
	@RequestMapping(value="/receberPedido-{id}")
	public String mostrarProduto(@PathVariable String id, Model model, HttpSession session) {
		
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
		
		Pedido pedidoRecebido = pedidoRepository.findOneByid(id);
		pedidoRecebido.setStatus("Recebido");
		pedidoRecebido.setData(LocalDateTime.now());
		pedidoRepository.save(pedidoRecebido);
		
		model.addAttribute("pedidosEnviados", pedidoRepository.findAllByClienteAndStatusOrderByDataAsc(clienteLogado, "Enviado"));
		model.addAttribute("pedidosRecebidos", pedidoRepository.findAllByClienteAndStatusOrderByDataAsc(clienteLogado, "Recebido"));
		
		return "pedidos";
	}
}
