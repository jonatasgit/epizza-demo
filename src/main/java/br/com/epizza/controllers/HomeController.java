package br.com.epizza.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.zxing.WriterException;

import br.com.epizza.GenerateQRCode;

@Controller
public class HomeController {
	
	@Autowired
	GenerateQRCode generateQRCode;
	
	@RequestMapping(value = "/gerarQRCode")
	public String gerarQRCode() throws WriterException, IOException {
		generateQRCode.generateQRCodeImage("funfouuu", 350, 350, "src/main/resources/static/img/5d2126256580ff2678da81e1.png");
		
		return "redirect:/home";
	}
}
