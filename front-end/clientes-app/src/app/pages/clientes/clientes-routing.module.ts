import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';

const routes: Routes = [
  {path: 'clientesForm', component: ClientesFormComponent},
  {path: 'clientesForm/:id', component: ClientesFormComponent},
  {path: 'allClients', component: ListaClienteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
