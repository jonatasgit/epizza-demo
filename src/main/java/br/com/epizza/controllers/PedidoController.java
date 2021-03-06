package br.com.epizza.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
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
		model.addAttribute("pedidosEnviados", pedidoRepository.findAllByClienteAndStatusOrderByDataDesc(clienteLogado, "Enviado"));
		model.addAttribute("pedidosRecebidos", pedidoRepository.findAllByClienteAndStatusOrderByDataDesc(clienteLogado, "Recebido"));
		model.addAttribute("pedidosFechados", this.buscarPedidosFechados(clienteLogado));
		
		return "pedidos";
	}
	
	@RequestMapping(value="/pagamentos")
	public String visualizarPagamentos(Model model, HttpSession session) {
		
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
		
		model.addAttribute("pedidosPagos", this.buscarPedidosPagos(clienteLogado));
		
		return "pagamentos";
	}
	
	@RequestMapping(value="/receberPedido-{id}")
	public String receberPedido(@PathVariable String id, Model model, HttpSession session) {
		
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		if(clienteLogado == null) {
			return "redirect:/login";
		}
		
		Pedido pedidoRecebido = pedidoRepository.findOneByid(id);
		//RECEBE APENAS OS ENVIADOS
		if(pedidoRecebido.getStatus().equals("Enviado")) {
			pedidoRecebido.setStatus("Recebido");
			pedidoRecebido.setData(LocalDateTime.now(ZoneId.of("America/Sao_Paulo")));
			pedidoRepository.save(pedidoRecebido);
		}
		
		
		model.addAttribute("pedidosEnviados", pedidoRepository.findAllByClienteAndStatusOrderByDataDesc(clienteLogado, "Enviado"));
		model.addAttribute("pedidosRecebidos", pedidoRepository.findAllByClienteAndStatusOrderByDataDesc(clienteLogado, "Recebido"));
		model.addAttribute("pedidosFechados", this.buscarPedidosFechados(clienteLogado));
		
		return "pedidos";
	}
	
	private List<Pedido> buscarPedidosFechados(Cliente restaurante){
		
		List<Pedido> pedidosFechados = pedidoRepository.findAllByClienteAndStatusOrderByDataDesc(restaurante, "Fechado");
		List<Pedido> listaNova = new ArrayList<Pedido>();
		
		for(Pedido pedido : pedidosFechados) {
			int index = 1;
			
			for(Pedido pedidoNovo : listaNova) {
				if(pedido.getApelido().equals(pedidoNovo.getApelido()) && pedido.getMesa().equals(pedidoNovo.getMesa())) {
					
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
		
		return listaNova; 		
	}
	
	private List<Pedido> buscarPedidosPagos(Cliente restaurante){
		
		List<Pedido> pedidosPagos = pedidoRepository.findAllByClienteAndStatusOrderByDataDesc(restaurante, "Pago");
		List<Pedido> listaNova = new ArrayList<Pedido>();
		
		for(Pedido pedido : pedidosPagos) {
			int index = 1;
			
			for(Pedido pedidoNovo : listaNova) {
				if(pedido.getApelido().equals(pedidoNovo.getApelido()) && pedido.getMesa().equals(pedidoNovo.getMesa())) {
					
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
		
		return listaNova; 		
	}
	
	@RequestMapping(value="/receberPagamento", method=RequestMethod.GET)
	public String salvarCategoria(@RequestParam String id,
								  @RequestParam Double desconto,
								  @RequestParam String cupom,
								  @RequestParam String formaPagamento,
								 
								  HttpSession session) {
		
		Pedido pedido = new Pedido();
		pedido = pedidoRepository.findOneByid(id);
		
		LocalDate hoje =  LocalDate.now(ZoneId.of("America/Sao_Paulo"));
		LocalDate amanha = hoje.plusDays(1);
		hoje = hoje.minusDays(180);
		
		//BUSCAR PEDIDOS FECHADOS
				List<Pedido> pedidosFechados = pedidoRepository.findAllByClienteAndMesaAndApelidoAndStatusAndDataBetween(pedido.getCliente(), pedido.getMesa(), pedido.getApelido(), "Fechado", hoje, amanha);
				if(!pedidosFechados.isEmpty()) {
					for(Pedido fechado : pedidosFechados) {
						fechado.setStatus("Pago");
						fechado.setFormaPagamento(formaPagamento);
						//APLICAR DESCONTO SE DEFINIDO
						if(desconto != null && !desconto.toString().isEmpty()) {
							fechado.setDesconto(desconto);
							fechado.setConta(pedido.getConta() - desconto);
						}
						
						pedidoRepository.save(fechado);
					}
				}
		
		
	
		
		return "redirect:/pedidos";
	}
}
