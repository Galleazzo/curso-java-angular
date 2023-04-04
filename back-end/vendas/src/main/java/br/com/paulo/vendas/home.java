package br.com.paulo.vendas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class home {
	
	@Autowired
	@Qualifier("applicationName")
	private String applicationName;

	@RequestMapping("/hello")
	public String helloWorld() {
		return applicationName;
	}
}
