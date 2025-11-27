POLÍTICA DE USO DE INTELIGÊNCIA ARTIFICAL 

1°Prompt: Chat, o arquivo .env fica raíz do projeto ou em uma pasta?
Resposta: Normalmente, o arquivo .env fica na raiz do projeto, no mesmo nível do:

package.json

server.js ou app.js

pasta src/ ou db/

pasta migrations/

pasta routes/

.env/

Aprendizado: O .env fica na raíz do projeto pois fica mais fácil da biblioteca dotenv carregar variáveis.

2°Prompt: Chat, criei minhas tabelas com knex e sqlite, porém coloquei uma informação errado, como posso resolver?
resposta:Se é um projeto acadêmico / local → APAGAR E RECRIAR a migration

Essa é a forma mais fácil e é o que quase todo mundo faz durante o desenvolvimento.

Passos:

Apague o arquivo da migration onde o atributo está errado
(em migrations/)

Apague o arquivo de banco SQLite (ex: database.sqlite)

Rode novamente:

Aprendizado: Um novo banco será criado com as alterações já feitas, sem complicações
