package br.com.epizza.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.epizza.models.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, String> {
	
	Cliente findOneByid(final String id);
	Cliente findOneByemail(final String email);
}
