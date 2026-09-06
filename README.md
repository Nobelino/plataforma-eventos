# Plataforma de Organização de Eventos

API REST desenvolvida em Java com Spring Boot e MongoDB para gerenciamento de eventos e participantes.

## Integrante

- Gabriel Davi Rocha Nobelino - 2515050046

## Tecnologias utilizadas

- Java 21
- Spring Boot
- Spring Web
- Spring Data MongoDB
- MongoDB
- Maven

## Estrutura do projeto

O projeto foi organizado utilizando as seguintes camadas:

- Entities
- Repositories
- Services
- Controllers

## Entidades

### Evento

Possui os seguintes dados:

- ID
- Nome
- Descrição
- Data
- Local
- Capacidade

### Participante

Possui os seguintes dados:

- ID
- Nome
- Email
- Telefone

## Endpoints

### Eventos

- GET `/eventos` - Lista todos os eventos
- GET `/eventos/{id}` - Busca um evento pelo ID
- POST `/eventos` - Cadastra um novo evento
- PUT `/eventos/{id}` - Atualiza um evento
- DELETE `/eventos/{id}` - Exclui um evento

### Participantes

- GET `/participantes` - Lista todos os participantes
- GET `/participantes/{id}` - Busca um participante pelo ID
- POST `/participantes` - Cadastra um novo participante
- PUT `/participantes/{id}` - Atualiza um participante
- DELETE `/participantes/{id}` - Exclui um participante

## Banco de dados

O projeto utiliza MongoDB.

A configuração utilizada para desenvolvimento local é:

`mongodb://localhost:27017/plataforma_eventos`

## Executando o projeto

Com o MongoDB em execução, execute:

```powershell
.\mvnw.cmd spring-boot:run