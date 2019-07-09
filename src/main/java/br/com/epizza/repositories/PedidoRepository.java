package br.com.epizza.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.epizza.models.Cliente;
import br.com.epizza.models.Pedido;

public interface PedidoRepository extends CrudRepository<Pedido, String> {
	
	Pedido findOneByid(final String id);
	List<Pedido> findAllBycliente(final Cliente cliente);
	List<Pedido> findAllByClienteAndStatusOrderByDataDesc(final Cliente cliente, final String status);
	List<Pedido> findAllByClienteAndMesaAndStatusInAndDataBetween(final Cliente cliente, final String mesa, final String status, final LocalDate dataStart, final LocalDate dataEnd);
}
