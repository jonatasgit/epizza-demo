package br.com.epizza.controllers;

import java.io.IOException;
import java.util.Base64;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.google.zxing.WriterException;

import br.com.epizza.GenerateQRCode;
import br.com.epizza.models.Cliente;
import br.com.epizza.models.Foto;
import br.com.epizza.services.FotoService;

@Controller
public class FotoController {
	@Autowired
	private FotoService fotoService;
	
	@Autowired
	private GenerateQRCode generateQRCode;
	
	@PostMapping("/photos/add")
	public String addPhoto(@RequestParam("title") String title, 
	  @RequestParam("image") MultipartFile image, Model model) 
	  throws IOException {
	    String id = fotoService.addPhoto(title, image);
	    return "redirect:/photos/" + id;
	}
	
	@GetMapping("/photos/{id}")
	public String getPhoto(@PathVariable String id, Model model) {
	    Foto foto = fotoService.getPhoto(id);
	    model.addAttribute("title", foto.getTitle());
	    model.addAttribute("image", 
	      Base64.getEncoder().encodeToString(foto.getImage().getData()));
	    return "photos";
	}
	
	@GetMapping("/qrcode")
	public String getQRCode(Model model, HttpSession session,
							@RequestParam String mesa) throws WriterException, IOException {
		
		Cliente clienteLogado = (Cliente) session.getAttribute("cliente");
		String urlCode = "https://garcomfacil-beta.herokuapp.com/scan/" + clienteLogado.getId() + "/"  + mesa;
		
		byte[] img = generateQRCode.getQRCodeImage(urlCode, 350, 350);
		
		model.addAttribute("title", "Mesa de número: " + mesa);
		model.addAttribute("image",
				Base64.getEncoder().encodeToString(img)
		);
		

		return "photos";
	}
}
