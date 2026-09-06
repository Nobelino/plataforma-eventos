package com.faculdade.eventos.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.faculdade.eventos.entities.Evento;

public interface EventoRepository extends MongoRepository<Evento, String> {

}