exports.up = function(knex) {
  return knex.schema.dropTable('itensCardapio');
};

exports.down = function(knex) {
  // Caso queira recriar a tabela ao desfazer a migration
  return knex.schema.createTable('itensCardapio', (table) => {
    table.increments('id').primary();
    // outros campos...
  });
};