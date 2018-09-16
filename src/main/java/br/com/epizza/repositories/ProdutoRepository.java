package br.com.epizza.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.epizza.models.Produto;

@Repository
public interface ProdutoRepository extends CrudRepository<Produto, String> {
	
	Produto findOneByid(final String id);
	
//
//	void delete(Produto deleted);
}
