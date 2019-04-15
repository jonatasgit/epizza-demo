package br.com.epizza.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.epizza.models.Cardapio;
import br.com.epizza.models.Categoria;
import br.com.epizza.models.Cliente;
import br.com.epizza.models.ClientesLogados;
import br.com.epizza.models.Pedido;
import br.com.epizza.models.Produto;
import br.com.epizza.repositories.CategoriaRepository;
import br.com.epizza.repositories.ClienteRepository;
import br.com.epizza.repositories.PedidoRepository;
import br.com.epizza.repositories.ProdutoRepository;

@RestController
public class PedidoRestController {
	
	@Autowired
	ProdutoRepository produtoRepository;
	@Autowired
	ClienteRepository clienteRepository;
	@Autowired
	CategoriaRepository categoriaRepository;
	@Autowired
	PedidoRepository pedidoRepository;
	
	@CrossOrigin
	@RequestMapping(value="/verificarPedidos", method=RequestMethod.GET)
	public ClientesLogados verificarPedidos(@RequestParam("cliente") String cliente,
								   		 @RequestParam("mesa") String mesa) {
		
		LocalDate hoje =  LocalDate.now();
		LocalDate amanha = hoje.plusDays(1);
		Cliente restaurante = clienteRepository.findOneByid(cliente);
		List<Pedido> pedidos = pedidoRepository.findAllByClienteAndMesaAndStatusAndDataBetween(restaurante, mesa, "Enviado", hoje, amanha);
		
		ClientesLogados logados = new ClientesLogados();
		logados.setPedidosEnviados(pedidos);
		
		return logados;
	}
	
	@CrossOrigin
	@RequestMapping(value="/buscarCardapio", method=RequestMethod.GET)
	public Cardapio buscarCardapio(@RequestParam("cliente") String cliente,
									@RequestParam("mesa") String mesa) {
		
		Cliente restaurante = clienteRepository.findOneByid(cliente);
		List<Produto> produtos = produtoRepository.findAllByClienteAndDisponivel(restaurante, true);
		List<Categoria> categorias = categoriaRepository.findAllByClienteAndDisponivelOrderByOrdemAsc(restaurante, true);
		
		Cardapio cardapio = new Cardapio();
		cardapio.setCategorias(categorias);
		cardapio.setProdutos(produtos);
		cardapio.setMesa(mesa);
		cardapio.setCliente(restaurante);
		
		return cardapio;
	}
	
	@CrossOrigin
	@RequestMapping(value="/enviarPedido", method=RequestMethod.POST)
	public boolean enviarPedido(@RequestBody Pedido pedido) {
		
		pedido.setData(LocalDateTime.now());
		
		pedidoRepository.save(pedido);
				
		return true;		
	}
	
}
