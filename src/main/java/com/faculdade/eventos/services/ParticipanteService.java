package com.faculdade.eventos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.faculdade.eventos.entities.Participante;
import com.faculdade.eventos.repositories.ParticipanteRepository;

@Service
public class ParticipanteService {

    private final ParticipanteRepository participanteRepository;

    public ParticipanteService(ParticipanteRepository participanteRepository) {
        this.participanteRepository = participanteRepository;
    }

    public List<Participante> listarTodos() {
        return participanteRepository.findAll();
    }

    public Optional<Participante> buscarPorId(String id) {
        return participanteRepository.findById(id);
    }

    public Participante criar(Participante participante) {
        return participanteRepository.save(participante);
    }

    public Optional<Participante> editar(String id, Participante novosDados) {

        return participanteRepository.findById(id).map(participante -> {

            participante.setNome(novosDados.getNome());
            participante.setEmail(novosDados.getEmail());
            participante.setTelefone(novosDados.getTelefone());

            return participanteRepository.save(participante);
        });
    }

    public boolean deletar(String id) {

        if (!participanteRepository.existsById(id)) {
            return false;
        }

        participanteRepository.deleteById(id);
        return true;
    }
}