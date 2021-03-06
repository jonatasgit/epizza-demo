package br.com.epizza.models;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="pedidos")
public class Pedido {
	
	@Id
	private String id;
	private List<Produto> produtos;
	private Cliente cliente;
	private String mesa;
	private String apelido;
	private String status;
	private LocalDateTime data;
	private Double conta;
	private Integer idLocalPagamento;
	private String formaPagamento;
	private Double desconto;
	private String cupom;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public List<Produto> getProdutos() {
		return produtos;
	}
	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}
	public Cliente getCliente() {
		return cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	public String getMesa() {
		return mesa;
	}
	public void setMesa(String mesa) {
		this.mesa = mesa;
	}
	public String getApelido() {
		return apelido;
	}
	public void setApelido(String apelido) {
		this.apelido = apelido;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public LocalDateTime getData() {
		return data;
	}
	public void setData(LocalDateTime data) {
		this.data = data;
	}
	public Double getConta() {
		return conta;
	}
	public void setConta(Double conta) {
		this.conta = conta;
	}
	public Integer getIdLocalPagamento() {
		return idLocalPagamento;
	}
	public void setIdLocalPagamento(Integer idLocalPagamento) {
		this.idLocalPagamento = idLocalPagamento;
	}
	public String getFormaPagamento() {
		return formaPagamento;
	}
	public void setFormaPagamento(String formaPagamento) {
		this.formaPagamento = formaPagamento;
	}
	public Double getDesconto() {
		return desconto;
	}
	public void setDesconto(Double desconto) {
		this.desconto = desconto;
	}
	public String getCupom() {
		return cupom;
	}
	public void setCupom(String cupom) {
		this.cupom = cupom;
	}
	
	
}
