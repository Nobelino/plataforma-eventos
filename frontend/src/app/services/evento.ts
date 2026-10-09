import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private apiUrl = 'http://localhost:8080/eventos';

  constructor(private http: HttpClient) {
  }

  listarTodos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  criar(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.apiUrl, evento);
  }

  deletar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  buscarPorId(id: string): Observable<Evento> {
  return this.http.get<Evento>(`${this.apiUrl}/${id}`);
  }

  editar(id: string, evento: Evento): Observable<Evento> {
  return this.http.put<Evento>(`${this.apiUrl}/${id}`, evento);
  }
}