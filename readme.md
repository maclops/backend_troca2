<!-- mongo -> user: loles@grr.la pass: #1FodaSe -->

Para rodar o backend, é necessário instalar as dependencias com o comando 'npm i'
arquivo .gitignore suprimido no github devido o mesmo estar incluso nos arquivos a ser ignorado

Esse projeto requer postgres e mongo instalado
Criar database no postgres com nome de "projeto"
O knex precisa ser instalado globalmente para funcionar

comando para criar as migration no bd: knex migrate:latest
comando para dropar as migration no bd: knex migrate:rollback

usar arquivo env_file como modelo para criar um .env com a chave de autenticação privada do servidor