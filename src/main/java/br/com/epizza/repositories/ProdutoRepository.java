package br.com.epizza.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.epizza.models.Categoria;
import br.com.epizza.models.Cliente;
import br.com.epizza.models.Produto;

@Repository
public interface ProdutoRepository extends CrudRepository<Produto, String> {
	
	Produto findOneByid(final String id);
	List<Produto> findAllBycliente(final Cliente cliente);
//
//	void delete(Produto deleted);
}
