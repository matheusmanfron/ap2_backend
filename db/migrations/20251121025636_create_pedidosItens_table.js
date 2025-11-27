exports.up = function(knex) {
// knex.schema.createTable cria a tabela
return knex.schema.createTable('pedidosItens', (table) => {
table.increments('id').primary(); // Chave primária com auto-incremento
table.integer('pedido_id').references('pedidos.id').notNullable();
table.integer('item_id').references('itensCardapio.id').notNullable();
table.integer('quantidade').notNullable();
table.decimal('precoUnitario').notNullable();
table.timestamps(true, true);
});
};
exports.down = function(knex) {
// 'down' desfaz o que 'up' fez, neste caso, deleta a tabela
return knex.schema.dropTable('pedidosItens');
};
