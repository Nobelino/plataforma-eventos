import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Participante } from '../models/participante';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  private apiUrl = 'http://localhost:8080/participantes';

  constructor(private http: HttpClient) {
  }

  listarTodos(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.apiUrl);
  }

  buscarPorId(id: string): Observable<Participante> {
    return this.http.get<Participante>(`${this.apiUrl}/${id}`);
  }

  criar(participante: Participante): Observable<Participante> {
    return this.http.post<Participante>(this.apiUrl, participante);
  }

  editar(id: string, participante: Participante): Observable<Participante> {
    return this.http.put<Participante>(
      `${this.apiUrl}/${id}`,
      participante
    );
  }

  deletar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}