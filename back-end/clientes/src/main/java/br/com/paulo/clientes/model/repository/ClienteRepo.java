package br.com.paulo.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paulo.clientes.model.entity.Cliente;

public interface ClienteRepo extends JpaRepository<Cliente, Integer> {

}
