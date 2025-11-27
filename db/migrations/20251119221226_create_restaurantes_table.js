exports.up = function(knex) {
// knex.schema.createTable cria a tabela
return knex.schema.createTable('restaurantes', (table) => {
table.increments('id').primary(); // Chave primária com auto-incremento
table.string('nome').notNullable().unique(); // Email (string), não pode ser nulo E deve ser único
table.string('tipo_cozinha').notNullable(); // Senha (string), não pode ser nulo
table.timestamps(true, true);
});
};
exports.down = function(knex) {
// 'down' desfaz o que 'up' fez, neste caso, deleta a tabela
return knex.schema.dropTable('restaurantes');
};