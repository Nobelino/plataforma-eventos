import { Routes } from '@angular/router';
import { Eventos } from './pages/eventos/eventos';
import { EventoForm } from './pages/evento-form/evento-form';
import { Participantes } from './pages/participantes/participantes';
import { ParticipanteForm } from './pages/participante-form/participante-form';

export const routes: Routes = [
  {
    path: 'eventos',
    component: Eventos
  },
  {
    path: 'eventos/novo',
    component: EventoForm
  },
  {
    path: 'eventos/editar/:id',
    component: EventoForm
  },
  {
    path: 'participantes',
    component: Participantes
  },
  {
    path: 'participantes/novo',
    component: ParticipanteForm
  },
  {
    path: 'participantes/editar/:id',
    component: ParticipanteForm
  }
];