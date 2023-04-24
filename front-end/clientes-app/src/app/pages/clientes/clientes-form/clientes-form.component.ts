import { Component } from '@angular/core';
import { Clientes } from '../clientes';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente: Clientes;

  constructor(){
    this.cliente = new Clientes;
  }
  ngOnInit(){}

  onSubmit(){
    console.log(this.cliente);
  }
}
