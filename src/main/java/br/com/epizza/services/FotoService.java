package br.com.epizza.services;

import java.io.IOException;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.com.epizza.models.Foto;
import br.com.epizza.repositories.FotoRepository;

@Service
public class FotoService {
	
	@Autowired
	private FotoRepository fotoRepo;
	
	public String addPhoto(String title, MultipartFile file) throws IOException { 
        Foto foto = new Foto();
        foto.setTitle(title);
        foto.setImage(
          new Binary(BsonBinarySubType.BINARY, file.getBytes())); 
        foto = fotoRepo.insert(foto); 
        return foto.getId(); 
    }
 
    public Foto getPhoto(String id) { 
        return fotoRepo.findById(id).get(); 
    }

}
