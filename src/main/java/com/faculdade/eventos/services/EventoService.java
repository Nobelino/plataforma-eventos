package com.faculdade.eventos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.faculdade.eventos.entities.Evento;
import com.faculdade.eventos.repositories.EventoRepository;

@Service
public class EventoService {

    private final EventoRepository eventoRepository;

    public EventoService(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    public List<Evento> listarTodos() {
        return eventoRepository.findAll();
    }

    public Optional<Evento> buscarPorId(String id) {
        return eventoRepository.findById(id);
    }

    public Evento criar(Evento evento) {
        return eventoRepository.save(evento);
    }

    public Optional<Evento> editar(String id, Evento novosDados) {

        return eventoRepository.findById(id).map(evento -> {

            evento.setNome(novosDados.getNome());
            evento.setDescricao(novosDados.getDescricao());
            evento.setData(novosDados.getData());
            evento.setLocal(novosDados.getLocal());
            evento.setCapacidade(novosDados.getCapacidade());

            return eventoRepository.save(evento);
        });
    }

    public boolean deletar(String id) {

        if (!eventoRepository.existsById(id)) {
            return false;
        }

        eventoRepository.deleteById(id);
        return true;
    }
}