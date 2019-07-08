package br.com.epizza.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	
	Logger logger = LoggerFactory.getLogger(PedidoRestController.class);
	
	@CrossOrigin
	@RequestMapping(value="/verificarPedidos", method=RequestMethod.GET)
	public ClientesLogados verificarPedidos(@RequestParam("cliente") String cliente,
								   		 @RequestParam("mesa") String mesa) {
		
		LocalDate hoje =  LocalDate.now();
		LocalDate amanha = hoje.plusDays(1);
		Cliente restaurante = clienteRepository.findOneByid(cliente);
		
		//LOG
		logger.info("Verificando Pedidos em aberto para o Cliente: " + restaurante.getNomeFantasia());
		
		List<Pedido> pedidos = pedidoRepository.findAllByClienteAndMesaAndStatusAndDataBetween(restaurante, mesa, "Enviado", hoje, amanha);
		List<Pedido> listaNova = new ArrayList<Pedido>();
		
		for(Pedido pedido : pedidos) {
			int index = 1;
			
			for(Pedido pedidoNovo : listaNova) {
				if(pedido.getApelido().equals(pedidoNovo.getApelido())) {
					
					String idAtual = pedidoNovo.getId();
					pedidoNovo.setId(idAtual+"@"+pedido.getId());
					
					List<Produto> produtosParaAdicionar = pedido.getProdutos();
					
					for(Produto produtoAdd : produtosParaAdicionar) {
						pedidoNovo.getProdutos().add(produtoAdd);
					}
					
				} else if (index == listaNova.size()){
					listaNova.add(pedido);
					break;
				}	
				index++;
			}
			if(listaNova.isEmpty()) {
				listaNova.add(pedido);
			}
		}
		
		
		
		ClientesLogados logados = new ClientesLogados();
		logados.setPedidosEnviados(listaNova);
		
		return logados;
	}
	
	@CrossOrigin
	@RequestMapping(value="/buscarCardapio", method=RequestMethod.GET)
	public Cardapio buscarCardapio(@RequestParam("cliente") String cliente,
									@RequestParam("mesa") String mesa) {
		
		Cliente restaurante = clienteRepository.findOneByid(cliente);
		//LOG
		logger.info("Buscando cardapio para o Cliente: " + restaurante.getNomeFantasia());
		
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
		
		//LOG
		logger.info("Salvando pedido do usuario: " + pedido.getApelido());
		
		pedido.setData(LocalDateTime.now(ZoneId.of("America/Sao_Paulo")));
		
		pedidoRepository.save(pedido);
				
		return true;		
	}
	
	@CrossOrigin
	@RequestMapping(value="/fecharConta", method=RequestMethod.POST)
	public boolean fecharConta(@RequestBody Pedido pedido) {
		//LOG
		logger.info("Fechando conta do usuario: " + pedido.getApelido());
		
		Pedido pedidoParaAtualizar = new Pedido();
		
		if(pedido.getId().contains("@")) {

			String[] ids = pedido.getId().split("@");
						
			for(String id : ids) {
				pedidoParaAtualizar  = pedidoRepository.findOneByid(id);
				pedidoParaAtualizar.setStatus("Fechado");
				pedidoParaAtualizar.setGroupId(pedido.getId());
				pedidoParaAtualizar.setConta(pedido.getConta());
				
				pedidoRepository.save(pedidoParaAtualizar);
			}
		} else {
			pedidoParaAtualizar  = pedidoRepository.findOneByid(pedido.getId());
			pedidoParaAtualizar.setStatus("Fechado");
			pedidoParaAtualizar.setConta(pedido.getConta());
			
			pedidoRepository.save(pedidoParaAtualizar);
		}	
		//pedido.setData(LocalDateTime.now(ZoneId.of("America/Sao_Paulo")));
		//pedido.setStatus("Fechado");
		
		//pedidoRepository.save(pedido);
				
		return true;		
	}
	
}
