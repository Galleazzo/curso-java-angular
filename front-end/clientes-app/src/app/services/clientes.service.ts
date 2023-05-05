import { Injectable } from '@angular/core';
import { Clientes } from '../pages/clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  private baseUrl = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }

  salvarCliente(cliente : Clientes) : Observable<Clientes> {
    return this.http.post<Clientes>(this.baseUrl , cliente);
  }

  todosClientes() : Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.baseUrl+`/allClients`)
  }

  deleteById(id: number) : Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.baseUrl + `/deleteCliente?id=` + id )
  }

}
