package br.com.paulo.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paulo.clientes.model.entity.Servico;

public interface ServicoRepo extends JpaRepository<Servico, Integer>{

}
