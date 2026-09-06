package com.faculdade.eventos.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.faculdade.eventos.entities.Participante;

public interface ParticipanteRepository extends MongoRepository<Participante, String> {

}