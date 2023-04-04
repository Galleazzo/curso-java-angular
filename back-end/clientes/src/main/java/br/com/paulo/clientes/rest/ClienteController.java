package br.com.paulo.clientes.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.paulo.clientes.model.entity.Cliente;
import br.com.paulo.clientes.model.repository.ClienteRepo;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

	
	@Autowired
	private ClienteRepo clienteRepo;
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente salvar(@RequestBody @Valid Cliente cliente) {
		return clienteRepo.save(cliente);
	}
	
	@RequestMapping("/findCliente")
	public Cliente acharPorId(@RequestParam Integer id) {
		return clienteRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}
	
	@RequestMapping("/deleteCliente")
	public String deletarPorId(@RequestParam Integer id) {
		clienteRepo.deleteById(id);
		return "Cliente deletado com sucesso!!";
	}
	
	@RequestMapping("/updateCliente")
	public void atualizar(@RequestParam Integer id, @RequestBody Cliente clienteAtualizado) {
		clienteRepo.findById(id).map(x ->{
				clienteAtualizado.setId(x.getId());
				return clienteRepo.save(clienteAtualizado);
		}).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
	}
}
