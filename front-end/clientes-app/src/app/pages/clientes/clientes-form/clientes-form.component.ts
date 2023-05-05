import { Component } from '@angular/core';
import { Clientes } from '../clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente: Clientes = new Clientes;
  clienteSalvo : boolean = false;

  constructor( private clienteService : ClientesService, private router : Router){
    
  }
  ngOnInit(){}

  saveClient(){
    this.clienteService.salvarCliente(this.cliente).subscribe( response  => {
      this.clienteSalvo = true;
      console.log(response);
    })
    setTimeout(() => {
      this.router.navigate(['/allClients']);
    }, 1000);
  }
}
