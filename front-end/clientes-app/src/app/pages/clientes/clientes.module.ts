import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';


@NgModule({
  declarations: [
    ClientesFormComponent,
    ListaClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports: [
    ClientesFormComponent,
    ListaClienteComponent
  ]
})
export class ClientesModule { }
