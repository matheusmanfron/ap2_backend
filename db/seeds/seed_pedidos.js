exports.seed = async function (knex) {
  // Limpa a tabela antes de inserir
  await knex('pedidos').del();

  // Insere 3 registros
  await knex('pedidos').insert([
    {id: 1, usuarios_id: 1,restaurante_id:3 ,valor_total: 45.50,status: 'pendente',data_criacao: '2025-06-10'},
    {id: 2, usuarios_id: 2,restaurante_id: 1,valor_total: 50.00,status: 'entregue',data_criacao: '2025-06-12'},
    { id: 3, usuarios_id: 3,restaurante_id: 2,valor_total: 100.00,status: 'cancelado',data_criacao: '2025-06-15'}
  ]);
};