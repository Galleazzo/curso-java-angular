import { Component } from '@angular/core';
import { Clientes } from '../clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente: Clientes = new Clientes;
  clienteSalvo : boolean = false;
  

  idClient! : number;

  constructor( private clienteService : ClientesService, private router : Router, private activatedRoute : ActivatedRoute){
    
  }
  ngOnInit(){
    this.idClient = this.activatedRoute.snapshot.params['id'];
    this.editForm();
  }

  saveClient(){
    this.clienteService.salvarCliente(this.cliente).subscribe( response  => {
      this.clienteSalvo = true;
      console.log(response);
    })
    setTimeout(() => {
      this.router.navigate(['/allClients']);
    }, 1000);
  }

  editForm(){
    this.clienteService.getClientById(this.idClient).subscribe( result =>  {
      this.cliente = result;
    })
  }

  editClient(cliente : Clientes){
    this.clienteService.updateClient(cliente).subscribe(result => {
      this.clienteSalvo = true;
    })
    setTimeout(() => {
      this.router.navigate(['/allClients']);
    }, 1000);
  }
}
