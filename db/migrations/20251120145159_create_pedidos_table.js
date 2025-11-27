exports.up = function(knex) {
// knex.schema.createTable cria a tabela
return knex.schema.createTable('pedidos', (table) => {
table.increments('id').primary(); // Chave primária com auto-incremento
table.integer('usuarios_id').references('usuarios.id').notNullable();
table.integer('restaurante_id').references('restaurantes.id').notNullable();
table.decimal('valor_total').notNullable();
table.string('status').notNullable();
table.date('data_criacao').notNullable();
table.timestamps(true, true);
});
};
exports.down = function(knex) {
// 'down' desfaz o que 'up' fez, neste caso, deleta a tabela
return knex.schema.dropTable('pedidos');
};

