# Plataforma de Organização de Eventos

Sistema para gerenciamento de eventos e participantes, desenvolvido em duas fases:

- **Fase 1:** API REST desenvolvida em Java com Spring Boot e MongoDB.
- **Fase 2:** Frontend desenvolvido em Angular consumindo a API REST da Fase 1.

## Integrantes

- Gabriel Davi Rocha Nobelino - 2515050046
- Gustavo Paula Cabral - 2515050020

## Tecnologias utilizadas

### Backend

- Java 21
- Spring Boot
- Spring Web
- Spring Data MongoDB
- MongoDB
- Maven

### Frontend

- Angular
- TypeScript
- HTML
- CSS
- Angular Router
- Angular HttpClient
- Angular Forms

## Estrutura do projeto

O projeto está dividido em duas partes principais:

### Backend

O backend foi organizado utilizando as seguintes camadas:

- **Entities:** representam as entidades e os dados armazenados.
- **Repositories:** responsáveis pelo acesso ao banco de dados.
- **Services:** concentram as operações e regras da aplicação.
- **Controllers:** disponibilizam os endpoints da API REST.

### Frontend

O frontend Angular foi organizado utilizando:

- **Models:** representam as entidades utilizadas pelo frontend.
- **Services:** responsáveis pela comunicação HTTP com a API REST.
- **Pages / Components:** representam as telas da aplicação.
- **Routes:** controlam a navegação entre as páginas.
- **Forms:** utilizados para cadastro e edição dos dados.

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

## Funcionalidades do Frontend

### Eventos

- Listar todos os eventos
- Cadastrar um novo evento através de formulário
- Editar um evento existente
- Excluir um evento
- Navegação por rotas

### Participantes

- Listar todos os participantes
- Cadastrar um novo participante através de formulário
- Editar um participante existente
- Excluir um participante
- Navegação por rotas

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

Para utilizar a aplicação completa, o MongoDB, o backend Spring Boot e o frontend Angular devem estar em execução.

### 1. Executar o Backend

Com o MongoDB em execução, abra um terminal na pasta raiz do projeto e execute:

```powershell
.\mvnw.cmd spring-boot:run
```

O backend ficará disponível em:

`http://localhost:8080`

### 2. Executar o Frontend

Abra outro terminal e entre na pasta do frontend:

```powershell
cd frontend
```

Na primeira execução do projeto, instale as dependências:

```powershell
npm install
```

Depois execute:

```powershell
ng serve
```

O frontend ficará disponível em:

`http://localhost:4200`

### 3. Acessar a aplicação

Com backend e frontend em execução, acesse:

`http://localhost:4200`

A partir da aplicação é possível acessar as telas de eventos e participantes e realizar as operações de cadastro, consulta, edição e exclusão.

## Compilação

### Backend

Para verificar a compilação do backend:

```powershell
.\mvnw.cmd clean compile
```

### Frontend

Dentro da pasta `frontend`, execute:

```powershell
npm run build
```

## Resumo das funcionalidades

O sistema permite realizar CRUD completo das entidades Evento e Participante.

Essas operações podem ser realizadas através do frontend Angular, que se comunica com a API REST Spring Boot e persiste os dados no MongoDB.
