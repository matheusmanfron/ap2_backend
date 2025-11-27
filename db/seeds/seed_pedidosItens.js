// src/database/seeds/02_seed_pedidosItens.js
exports.seed = async function (knex) {
  // Limpa os registros
  await knex('pedidosItens').del();

  // Insere 3 linhas
  await knex('pedidosItens').insert([
    {id: 1, pedido_id: 1,item_id: 1, quantidade: 2,precoUnitario: 50.00},
    {id: 2, pedido_id: 1,item_id: 2,quantidade: 1,precoUnitario: 100.00},
    {id: 3, pedido_id: 2,item_id: 3,quantidade: 3,precoUnitario: 45.50}
  ]);
};