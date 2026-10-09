import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Participante } from '../../models/participante';
import { ParticipanteService } from '../../services/participante';

@Component({
  selector: 'app-participantes',
  imports: [RouterLink],
  templateUrl: './participantes.html',
  styleUrl: './participantes.css'
})
export class Participantes implements OnInit {

  participantes = signal<Participante[]>([]);

  constructor(
    private participanteService: ParticipanteService
  ) {
  }

  ngOnInit(): void {
    this.carregarParticipantes();
  }

  carregarParticipantes(): void {
    this.participanteService.listarTodos().subscribe({
      next: (dados) => {
        this.participantes.set(dados);
      },
      error: (erro) => {
        console.error('Erro ao buscar participantes:', erro);
      }
    });
  }

  excluir(id: string | undefined): void {

    if (!id) {
      return;
    }

    const confirmar =
      confirm('Deseja realmente excluir este participante?');

    if (!confirmar) {
      return;
    }

    this.participanteService.deletar(id).subscribe({
      next: () => {
        this.carregarParticipantes();
      },
      error: (erro) => {
        console.error('Erro ao excluir participante:', erro);
      }
    });
  }
}