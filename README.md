Descrição
Este projeto é uma API RESTful para uma loja de itens medievais sob encomenda, como espadas feitas especialmente para clientes.
Desenvolvido em TypeScript, com gerenciamento de banco de dados utilizando Sequelize. A aplicação oferece operações de criação, leitura e atualização de informações, além de autenticação via JWT para algumas rotas protegidas.
O projeto também conta com testes automatizados para garantir a qualidade do código.

Funcionalidades
CRUD de itens medievais.

Autenticação JWT para proteger rotas específicas.

Testes unitários e de integração nas camadas de Service e Controllers.

Gerenciamento de dados com Sequelize.
Organização do código em camadas (Controllers e Services).
Requisitos
Node.js (>= 14.x)
npm (>= 6.x) ou yarn
Banco de dados MySQL ou PostgreSQL
Sequelize (>= 6.x)
Instalação
Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
Instale as dependências:
bash
Copiar código
npm install
Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
env
Copiar código
DB_HOST=localhost
DB_USER=seu-usuario
DB_PASS=sua-senha
DB_NAME=nome-do-banco
JWT_SECRET=sua-chave-secreta
Execute as migrações do banco de dados:
bash
Copiar código
npx sequelize db:migrate
Inicie o servidor:
bash
Copiar código
npm run dev
A aplicação estará disponível em http://localhost:3000.

Endpoints
Rota: /items
GET /items: Lista todos os itens medievais disponíveis.
POST /items: Cria um novo item medieval. (Rota autenticada)
Rota: /items/:id
GET /items/:id: Retorna detalhes de um item específico.
PUT /items/:id: Atualiza as informações de um item específico. (Rota autenticada)
Autenticação
Algumas rotas são protegidas por JWT. Para obter um token, faça login na rota de autenticação (/login). Insira o token JWT nos cabeçalhos das requisições seguintes:

http
Copiar código
Authorization: Bearer seu-token-jwt
Testes
Este projeto inclui testes para garantir o funcionamento correto das camadas de Service e Controller. Para rodar os testes, utilize o comando:

bash
Copiar código
npm run test
Os testes foram implementados com Jest, Mocha, e outras ferramentas de testes.

Tecnologias Utilizadas
TypeScript: Para tipagem estática e melhor desenvolvimento.
Sequelize: ORM para gerenciamento do banco de dados.
JWT: Para autenticação segura.
Jest/Mocha: Para testes.
Express: Framework para criação da API.
Estrutura do Projeto
bash
Copiar código
.
├── src
│   ├── controllers  # Lógica dos controladores
│   ├── services     # Regras de negócio
│   ├── models       # Definição dos modelos Sequelize
│   ├── middlewares  # Middleware de autenticação
│   └── routes       # Definição das rotas da API
├── tests            # Testes unitários e de integração
├── .env             # Variáveis de ambiente
└── README.md
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
