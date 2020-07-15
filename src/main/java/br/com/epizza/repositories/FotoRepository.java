package br.com.epizza.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.epizza.models.Foto;

public interface FotoRepository extends MongoRepository<Foto, String> {
	
}
