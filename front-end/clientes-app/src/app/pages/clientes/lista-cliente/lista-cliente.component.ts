import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from '../clientes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent {

  clientes : Clientes[] = [];
  clienteSelecionado!: Clientes;

  constructor(private clienteservice: ClientesService){

  }

  ngOnInit(){
    this.allClientes()
  }

  allClientes(){
    this.clienteservice.todosClientes().subscribe(result => {
      this.clientes = result;
    });
  }

  limpar(){
    this.clientes = [];
  }

  preparaDelecao(cliente : Clientes){
    this.clienteSelecionado = cliente;
  }

  deleteCliente(){
    this.clienteservice.deleteById(this.clienteSelecionado).subscribe(result => {
      this.ngOnInit();
    })
  }

}
