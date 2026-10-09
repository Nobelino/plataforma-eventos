import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento';

@Component({
  selector: 'app-evento-form',
  imports: [FormsModule],
  templateUrl: './evento-form.html',
  styleUrl: './evento-form.css'
})
export class EventoForm implements OnInit {

  evento: Evento = {
    nome: '',
    descricao: '',
    data: '',
    local: '',
    capacidade: 0
  };

  idEvento?: string;
  modoEdicao = false;

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.modoEdicao = true;
      this.idEvento = id;

      this.eventoService.buscarPorId(id).subscribe({
        next: (evento) => {
          this.evento = evento;
        },
        error: (erro) => {
          console.error('Erro ao buscar evento:', erro);
        }
      });
    }
  }

  salvar(): void {

    if (this.modoEdicao && this.idEvento) {

      this.eventoService.editar(this.idEvento, this.evento).subscribe({
        next: () => {
          this.router.navigate(['/eventos']);
        },
        error: (erro) => {
          console.error('Erro ao editar evento:', erro);
        }
      });

    } else {

      this.eventoService.criar(this.evento).subscribe({
        next: () => {
          this.router.navigate(['/eventos']);
        },
        error: (erro) => {
          console.error('Erro ao cadastrar evento:', erro);
        }
      });
    }
  }
}