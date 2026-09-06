package com.faculdade.eventos.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.eventos.entities.Participante;
import com.faculdade.eventos.services.ParticipanteService;

@RestController
@RequestMapping("/participantes")
public class ParticipanteController {

    private final ParticipanteService participanteService;

    public ParticipanteController(ParticipanteService participanteService) {
        this.participanteService = participanteService;
    }

    @GetMapping
    public List<Participante> listarTodos() {
        return participanteService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Participante> buscarPorId(@PathVariable String id) {
        return participanteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Participante> criar(@RequestBody Participante participante) {

        Participante participanteCriado = participanteService.criar(participante);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(participanteCriado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Participante> editar(
            @PathVariable String id,
            @RequestBody Participante participante) {

        return participanteService.editar(id, participante)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable String id) {

        if (!participanteService.deletar(id)) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.noContent().build();
    }
}