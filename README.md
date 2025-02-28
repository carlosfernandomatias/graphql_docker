# graphql_docker

🚀 Instalação
1. Clone o Repositório
Para começar, clone este repositório:

bash
Copiar
Editar
git clone https://github.com/seuusuario/graphql-mariadb.git
cd graphql-mariadb
2. Instalar Dependências
Instale as dependências do projeto com npm:

bash
Copiar
Editar
npm install
3. Iniciar o Projeto
Inicie o servidor GraphQL:

bash
Copiar
Editar
npm start
Isso fará o servidor rodar na porta 3000.

Agora você pode acessar a interface GraphiQL em:

bash
Copiar
Editar
http://localhost:3000/graphiql
E a URL do endpoint GraphQL será:

bash
Copiar
Editar
http://localhost:3000/graphql
🛠️ Estrutura do Banco de Dados
Este projeto utiliza um banco de dados MariaDB. A tabela principal é a produtos:

id	nome	preco
1	Produto A	10.00
2	Produto B	20.50
3	Produto C	30.99
Comando SQL para criação da tabela produtos:
sql
Copiar
Editar
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

INSERT INTO produtos (nome, preco) VALUES 
('Produto A', 10.00),
('Produto B', 20.50),
('Produto C', 30.99);
📑 Consultas GraphQL
Aqui estão alguns exemplos de como você pode realizar consultas no seu servidor GraphQL.

1. Buscar Produtos com Filtro pelo Nome
graphql
Copiar
Editar
query {
    produtos(nome: "Produto A") {
        id
        nome
        preco
    }
}
Esta consulta retorna os produtos cujo nome é exatamente "Produto A".

2. Buscar Produtos com Filtro LIKE
graphql
Copiar
Editar
query {
    produtos(nome: "Prod%") {
        id
        nome
        preco
    }
}
Esta consulta retorna todos os produtos cujo nome começa com "Prod".

3. Buscar Produtos com Filtros Combinados (WHERE)
graphql
Copiar
Editar
query {
    produtos(nome: "Produto A", precoMin: 5, precoMax: 15) {
        id
        nome
        preco
    }
}
Esta consulta retorna os produtos cujo nome é "Produto A" e o preço está entre 5 e 15.

4. Consulta com JOIN (Produtos e Categorias)
graphql
Copiar
Editar
query {
    produtos {
        id
        nome
        preco
        categoria {
            id
            nome
        }
    }
}
Esta consulta faz um JOIN entre as tabelas produtos e categorias, retornando os produtos com suas respectivas categorias.

Nota: A tabela categorias deve existir no seu banco de dados. Aqui está o SQL para criar a tabela categorias:

sql
Copiar
Editar
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

INSERT INTO categorias (nome) VALUES 
('Categoria 1'),
('Categoria 2');
No código GraphQL, será utilizado um LEFT JOIN entre produtos e categorias para retornar os dados.

💻 Estrutura do Projeto
src/: Contém o código fonte do projeto.
index.js: Ponto de entrada do servidor Node.js.
db.js: Arquivo de configuração para a conexão com o MariaDB.
resolvers.js: Contém os resolvers GraphQL, onde são implementadas as consultas e a lógica de banco de dados.
docker-compose.yml: Arquivo de configuração do Docker para rodar o MariaDB.
package.json: Gerencia as dependências do projeto.
📝 Comandos Principais do GraphQL
Aqui estão alguns exemplos das consultas que você pode realizar diretamente na interface GraphiQL:

1. Consulta Simples
Busca todos os produtos disponíveis:

graphql
Copiar
Editar
query {
    produtos {
        id
        nome
        preco
    }
}
2. Consulta com Argumento
Busca produtos com base no nome:

graphql
Copiar
Editar
query {
    produtos(nome: "Produto A") {
        id
        nome
        preco
    }
}
3. Consulta com Filtros de Preço
Busca produtos entre um valor mínimo e máximo:

graphql
Copiar
Editar
query {
    produtos(precoMin: 10, precoMax: 30) {
        id
        nome
        preco
    }
}
🛠️ Configuração do Banco de Dados no Docker
Caso esteja utilizando Docker para rodar o banco de dados, o arquivo docker-compose.yml pode ser utilizado para configurar o MariaDB:

yaml
Copiar
Editar
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./src:/app/src
    environment:
      - NODE_ENV=development
      - DB_HOST=db
      - DB_USER=root
      - DB_PASS=123456
      - DB_NAME=meubanco
    depends_on:
      - db

  db:
    image: mariadb:latest
    environment:
      MARIADB_ROOT_PASSWORD: 123456
      MARIADB_DATABASE: meubanco
    ports:
      - "3306:3306"
Esse arquivo configura o MariaDB e conecta a aplicação Node.js com o banco de dados. As variáveis de ambiente são passadas pelo Docker.

🧑‍💻 Contribuindo
Se você deseja contribuir com este projeto, faça um fork, crie uma branch e envie um pull request.

🏷️ Licença
Este projeto está licenciado sob a MIT License.

