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

  deleteById(cliente : Clientes) : Observable<any>{
    return this.http.delete<any>(this.baseUrl + `/deleteCliente?id=` + cliente.id )
  }

  getClientById(id : number) : Observable<Clientes> {
    return this.http.get<any>(this.baseUrl + `/findCliente/` + id)
  }

  updateClient(cliente : Clientes) : Observable<Clientes>{
    return this.http.put<any>(this.baseUrl + `/updateCliente?id=` + cliente.id, cliente);
  }

}
