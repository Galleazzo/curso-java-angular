package br.com.paulo.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paulo.clientes.model.entity.Produto;

public interface ProdutoRepo extends JpaRepository<Produto, Integer>{

}
