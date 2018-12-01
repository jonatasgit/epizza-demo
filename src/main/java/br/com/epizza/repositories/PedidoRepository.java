package br.com.epizza.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.epizza.models.Cliente;
import br.com.epizza.models.Pedido;

public interface PedidoRepository extends CrudRepository<Pedido, String> {
	
	Pedido findOneByid(final String id);
	List<Pedido> findAllBycliente(final Cliente cliente);
	List<Pedido> findAllByClienteAndStatusOrderByDataAsc(final Cliente cliente, final String status);
}
