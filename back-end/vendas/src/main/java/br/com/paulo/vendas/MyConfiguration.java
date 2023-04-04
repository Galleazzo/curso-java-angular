package br.com.paulo.vendas;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfiguration {

	@Bean(name = "applicationName")
	public String applicationName() {
		return "Sistemas de Vendas";
	}
}
