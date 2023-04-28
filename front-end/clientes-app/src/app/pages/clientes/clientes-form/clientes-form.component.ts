import { Component } from '@angular/core';
import { Clientes } from '../clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente: Clientes = new Clientes;

  constructor( private clienteService : ClientesService){
    this.cliente = clienteService.getCliente();
  }
  ngOnInit(){}

  onSubmit(){
    console.log(this.cliente);
  }
}
