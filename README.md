# Projeto teste para KOR Solutions

Este projeto foi desenvolvido para o teste da empresa KOR Solutions. 
O projeto consiste em uma API RESTful com o uso do framework Node.js usando a ferramente Express e TypeORM, desenvolvido em TypeScript.
O banco de dados utilizado foi contruido com PostgreeSQL e foi subido um container usando Docker para fazê-lo funcionar.

## Instalação

Para Instalação do projeto, é necessário ter o Node.js e o Docker instalados em sua máquina.

1. Clone o repositório
```bash
git clone https://github.com/Beluomini/KOR_test.git
```

2. Instale as dependências
```bash
npm install
```

3. Suba o container do banco de dados
```bash
docker-compose up
```

4. Rode as migrations
```bash
npm run typeorm migration:run
```

5. Inicie o servidor
```bash
npm run dev
```

## Rotas

### GET /processo
Retorna todos os processos cadastrados, 
podendo filtrá-los por cliente_id e participantes.
Os filtros são opcionais e podem ser passados como query params.

### GET /processo/:id/participantes
Retorna todos os participantes de um processo específico

### GET /processo/todos
Retorna todos os processos cadastrados,

### GET /processo/:id
Retorna um processo específico

### POST /processo
Cria um novo processo

### PUT /processo/:id
Atualiza um processo

### DELETE /processo/:id
Deleta um processo


