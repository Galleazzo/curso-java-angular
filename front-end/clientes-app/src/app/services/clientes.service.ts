import { Injectable } from '@angular/core';
import { Clientes } from '../pages/clientes/clientes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getCliente() : Clientes{
    var c1 : Clientes = new Clientes();
    c1.nome = "Paulo";
    c1.cpf = "123.456.789-00";
    return c1;
  }
}
