package br.com.paulo.clientes.rest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.paulo.clientes.model.entity.Produto;
import br.com.paulo.clientes.model.repository.ProdutoRepo;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepo produtoRepo;
	
	
	@PostMapping("/newProduct")
	public Produto addNewProduct(@RequestBody @Valid Produto produto) {
		LocalDateTime date = LocalDateTime.now();
		produto.setDataDeCadastro(date);
		this.produtoRepo.save(produto);
		return produto;
	}
	
	@GetMapping("/allProducts")
	public List<Produto> getAll(){
		List<Produto> list = this.produtoRepo.findAll();
		return list;
	}
	
	
	@GetMapping("/byId/{id}")
	public Produto getById(@PathVariable Integer id) {
		return this.produtoRepo.findById(id).orElseThrow(() -> 
			new ResponseStatusException(HttpStatus.NOT_FOUND)
		);
	}
	
	
	@PutMapping("/updateProduct")
	public void updateProduct(@RequestParam Integer id, @RequestBody @Valid Produto produto) {
		this.produtoRepo.findById(id).map(x -> {
			produto.setId(x.getId());
			return this.produtoRepo.save(produto);
		});
	}
	

}
