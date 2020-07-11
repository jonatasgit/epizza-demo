package br.com.epizza;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebMvcConfig {
	
	@RequestMapping({ "/scan/{cliente:\\w+}/{mesa:\\w+}", "/inicio"})
	   public String index() {
	       return "forward:/index.html";
	   }
	
}
