# API - PersoNaruto

## Esta api serve para criar, ler, inserir e apagar dados em um banco de dados com a tabela de personagens do universo Naruto.

Tabela de conteúdos
=================
<!--ts-->

   * [Operações](###Recursos)
   * [Pré Requisitos](###Pré-requisitos)
   * [Instalando as tecnologias necessárias](###Instalando-as-Tecnologias)
   * [incializando o Servidor](##Servidor)
   * [Tecnologias](#tecnologias)
   * [Teste](###Teste)
<!--te-->

### Recursos

- [x] Cadastro de personagens
- [x] Leitura de todos personagens
- [X] Atualização de Personagem
- [X] Esclusão de Personagem

### Pré-requisitos
- express
- dotenv
- nodemon
- joi
- moment
- mysql2

### Instalando-as-Tecnologias

#### Inicialize o npm

- npm init

#### Instale o servidor express 

- npm i express

#### Instale o dotenv para configurarmos nossas variáveis de ambiente

- npm i dotenv

#### Instale o Joi para fazer as validações dos dados a serem inseridos

- npm i joi

#### Instale o nodemon para que o server seja reiniciado a cada alteração

- npm i nodemon

#### Instale o moment para trabalhar com datas, horas e suas formatações

- npm i moment

#### Instale o mysql2 para fazer a conexão e transações no banco de dados

- npm i mysql2


### Configurações iniciais

#### Configure as variáveis abaixo no seu .env

- PORT=3333

É a porta em que seu servidor irá escutar

- HOST=localhost

É seu ip privado, podendo ser 127.0.0.1 ou localhost

- HOST_MYSQL=localhost

É o ip onde o mysql esteja instalado na máquina, normalmente 127.0.0.1 ou localhost

- PORT_MYSQL=3306

É a porta onde o mysql ouve, por padrão ela vem 3306

- USER_MYSQL=root

É o usuário no mysql onde a database será acessa e conterá as tabelas, padrão é root

- PASS_MYSQL=1234

Senha para acessar o banco de dados, caso você não tenha uma senha configurada, deixe PASS_MYSQL=

- DATABASE_MYSQL=anime_naruto

Nome do banco de dados que conterá as tabelas a serem acessadas

## Servidor

### 🎲 Rodando o Back End

<p> $ npm run start </p>

 O servidor iniciará na porta configurada no dotenv, como configurei na porta 333, acesse <http://localhost:3333>

### Teste

#### Create

- localhost:3333/personagens/

Nessa rota você inserir com o método post

Segue abaixo um exemplo de formulário URL encoded



#### Read

- http:// localhost:3333/personagens

Essa rota retornará um objeto json {} com a lista de todos personagens cadastro no banco de dados.
