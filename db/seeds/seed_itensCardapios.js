exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('itensCardapios').del()
  await knex('itensCardapios').insert([
    {id_cardapio: 1, nome: 'Massa italiana', descricao: 'Massa com tomates, temperos frescos e molho da casa',restaurante_id: 1, preco: 50.00},
    {id_cardapio: 2, nome: 'Sushi combo', descricao: 'Várias peças de sushi com molho shoyo, (peças escolhidas a gosto)', restaurante_id: 2, preco: 100.00},
    {id_cardapio: 3, nome: 'Mash burguer', descricao: 'Hamburguer com carne, alface, tomate, queijo cheddar e maionese verde', restaurante_id: 3, preco: 45.50}
  ]);
};
