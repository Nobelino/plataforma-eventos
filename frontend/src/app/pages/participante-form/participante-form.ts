import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Participante } from '../../models/participante';
import { ParticipanteService } from '../../services/participante';

@Component({
  selector: 'app-participante-form',
  imports: [FormsModule],
  templateUrl: './participante-form.html',
  styleUrl: './participante-form.css'
})
export class ParticipanteForm implements OnInit {

  participante: Participante = {
    nome: '',
    email: '',
    telefone: ''
  };

  idParticipante?: string;
  modoEdicao = false;

  constructor(
    private participanteService: ParticipanteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.modoEdicao = true;
      this.idParticipante = id;

      this.participanteService.buscarPorId(id).subscribe({
        next: (participante) => {
          this.participante = participante;
        },
        error: (erro) => {
          console.error('Erro ao buscar participante:', erro);
        }
      });
    }
  }

  salvar(): void {

    if (this.modoEdicao && this.idParticipante) {

      this.participanteService
        .editar(this.idParticipante, this.participante)
        .subscribe({
          next: () => {
            this.router.navigate(['/participantes']);
          },
          error: (erro) => {
            console.error('Erro ao editar participante:', erro);
          }
        });

    } else {

      this.participanteService
        .criar(this.participante)
        .subscribe({
          next: () => {
            this.router.navigate(['/participantes']);
          },
          error: (erro) => {
            console.error('Erro ao cadastrar participante:', erro);
          }
        });
    }
  }
}