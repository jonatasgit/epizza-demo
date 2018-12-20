package br.com.epizza.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="categorias")
public class Categoria {
	@Id
	private String id;
	private String nome;
	private String ordem;
	private Boolean disponivel;
	private Boolean permite2Sabores;
	private Boolean precoMedio2Sabores;
	private Cliente cliente;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}	
	public String getOrdem() {
		return ordem;
	}
	public void setOrdem(String ordem) {
		this.ordem = ordem;
	}
	
	public Boolean getDisponivel() {
		return disponivel;
	}
	public void setDisponivel(Boolean disponivel) {
		this.disponivel = disponivel;
	}
	public Cliente getCliente() {
		return cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	public Boolean getPermite2Sabores() {
		return permite2Sabores;
	}
	public void setPermite2Sabores(Boolean permite2Sabores) {
		this.permite2Sabores = permite2Sabores;
	}
	public Boolean getPrecoMedio2Sabores() {
		return precoMedio2Sabores;
	}
	public void setPrecoMedio2Sabores(Boolean precoMedio2Sabores) {
		this.precoMedio2Sabores = precoMedio2Sabores;
	}
	
	
}
