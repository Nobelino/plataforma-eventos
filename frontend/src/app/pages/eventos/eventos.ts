import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento';

@Component({
  selector: 'app-eventos',
  imports: [RouterLink],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos implements OnInit {

  eventos = signal<Evento[]>([]);

  constructor(private eventoService: EventoService) {
  }

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.eventoService.listarTodos().subscribe({
      next: (dados) => {
        this.eventos.set(dados);
      },
      error: (erro) => {
        console.error('Erro ao buscar eventos:', erro);
      }
    });
  }

  excluir(id: string | undefined): void {

    if (!id) {
      return;
    }

    const confirmar = confirm('Deseja realmente excluir este evento?');

    if (!confirmar) {
      return;
    }

    this.eventoService.deletar(id).subscribe({
      next: () => {
        this.carregarEventos();
      },
      error: (erro) => {
        console.error('Erro ao excluir evento:', erro);
      }
    });
  }
}