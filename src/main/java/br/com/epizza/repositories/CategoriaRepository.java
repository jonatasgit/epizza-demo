package br.com.epizza.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.epizza.models.Categoria;
import br.com.epizza.models.Cliente;

@Repository
public interface CategoriaRepository extends CrudRepository<Categoria, String> {
	
	Categoria findOneByid(final String id);
	//List<Categoria> findAllBycliente(final Cliente cliente);
	List<Categoria> findAllByOrderByOrdemAsc(final Cliente cliente);
	List<Categoria> findAllByClienteAndDisponivelOrderByOrdemAsc(final Cliente cliente, final Boolean disponivel);
}
