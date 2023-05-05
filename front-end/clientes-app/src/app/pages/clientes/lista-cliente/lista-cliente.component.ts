import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from '../clientes';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent {

  clientes : Clientes[] = [];

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

  deleteCliente(id: number){
    this.clienteservice.deleteById(id).subscribe(result => {
      this.clientes = result;
    })
  }

}
