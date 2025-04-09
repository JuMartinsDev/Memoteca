import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';
  private http = inject(HttpClient);

  listar() {
    return this.http.get<Pensamento[]>(this.API);
  }
}
