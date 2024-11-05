# alefe-joias-api-bot

## Descrição do Projeto

Um bot para a empresa Alefe Joias. Este projeto foi desenvolvido para automatizar processos e facilitar a interação com os clientes. Recentemente, decidimos mover a API para um repositório separado para facilitar o desenvolvimento e a manutenção.

## Dependências

### Dependências de Produção

- `cors`: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- `express`: Framework para construção de aplicações web e APIs.
- `knex`: Query builder SQL para Node.js.
- `mysql2`: Cliente MySQL para Node.js.

### Dependências de Desenvolvimento

- `@commitlint/cli`: Ferramenta para garantir que as mensagens de commit sigam um padrão.
- `@commitlint/config-conventional`: Configuração padrão para o commitlint.
- `@eslint/js`: Ferramenta de linting para JavaScript.
- `commitizen`: Ferramenta para facilitar a criação de mensagens de commit.
- `dotenv`: Carrega variáveis de ambiente de um arquivo `.env`.
- `dotenv-expand`: Expande variáveis de ambiente em arquivos `.env`.
- `eslint`: Ferramenta de linting para JavaScript.
- `eslint-config-prettier`: Configuração para desativar regras do ESLint que conflitam com o Prettier.
- `globals`: Lista de variáveis globais.
- `husky`: Ferramenta para criar hooks de Git.
- `prettier`: Ferramenta de formatação de código.
- `zod`: Biblioteca para validação de esquemas.

## Scripts

- `dev`: Inicia os serviços, aplica as migrações e inicia o servidor em modo de desenvolvimento.
- `start`: Inicia o servidor.
- `services:up`: Sobe os serviços definidos no Docker Compose.
- `services:down`: Derruba os serviços definidos no Docker Compose.
- `services:stop`: Para os serviços definidos no Docker Compose.
- `migrations:create`: Cria uma nova migração.
- `migrations:up`: Aplica as migrações.
- `migrations:down`: Reverte as migrações.
- `lint:prettier:check`: Verifica a formatação do código com o Prettier.
- `lint:prettier:fix`: Formata o código com o Prettier.
- `lint:eslint:check`: Verifica o código com o ESLint.
- `prepare`: Configura o Husky.
- `commit`: Inicia o Commitizen para criar mensagens de commit.

## Rotas

- `GET /users`: Retorna todos os usuários.
- `GET /user/:phone`: Retorna um usuário pelo telefone.
- `POST /user`: Cria um novo usuário.
- `PUT /user/:phone`: Atualiza um usuário existente pelo telefone.
- `DELETE /user/:phone`: Deleta um usuário pelo telefone.

- `GET /orders`: Retorna todos os pedidos.
- `GET /orders/:userId`: Retorna todos os pedidos de um usuário.
- `GET /order/:orderId`: Retorna um pedido pelo ID.

## Passo a Passo para Uso

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/alefe-joias-api-bot.git
cd alefe-joias-api-bot
```

2. Instale as dependências:

```sh
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias.

4. Inicie os serviços:

```sh
npm run services:up
```

5. Aplique as migrações:

```sh
npm run migrations:up
```

6. Inicie o servidor em modo de desenvolvimento:

```sh
npm run dev
```

## Autor

Alefe Filipe

## Licença

MIT
