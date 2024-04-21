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

As rotas estão documentadas pelo Swagger na rota http://localhost:3000/api-docs/ (uma vez que o servidor está online)

Para as rotas foi usado o framework Node juntamente com express. O arquivo principal está em ./src/index.ts.

Já as rotas estão no diretório ./src/routes e se dividem entre as entidades
- Processos
- Clientes
- Participantes

## Banco de dados

Para o banco de dados foi usado postgreeSQL que está rodando em um container do docker.
Para a criação do banco são criadas migrations ("./src/database/migrations"), que são criadas a partir do arquivo "./src/database/data-source.ts"