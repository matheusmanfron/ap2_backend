exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('restaurantes').del()

  await knex('restaurantes').insert([
    {id_restaurante: 1, nome: 'Mamamia', tipo_cozinha: 'italiano'},
    {id_restaurante: 2, nome: 'Sushi-Fu', tipo_cozinha: 'japonês'},
    {id_restaurante: 3, nome: 'Burger Big', tipo_cozinha: 'fast food'}
  ]);
};
