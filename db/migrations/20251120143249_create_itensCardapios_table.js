exports.up = function(knex) {
// knex.schema.createTable cria a tabela
return knex.schema.createTable('itensCardapios', (table) => {
table.increments('id_cardapio').primary(); // Chave primária com auto-incremento
table.string('nome').notNullable().unique(); // Email (string), não pode ser nulo E deve ser único
table.string('descricao').notNullable(); // Senha (string), não pode ser nulo
table.integer('restaurante_id').references('restaurantes.id').notNullable();
table.decimal('preco').notNullable();
table.timestamps(true, true);
});
};
exports.down = function(knex) {
// 'down' desfaz o que 'up' fez, neste caso, deleta a tabela
return knex.schema.dropTable('itensCardapios');
};
