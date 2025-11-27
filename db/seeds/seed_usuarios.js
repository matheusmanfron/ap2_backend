exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()

  await knex('usuarios').insert([
    {id: 1, email: 'robertinho@email.com', senha: 210943},
    {id: 2, email: 'mariele@email.com', senha: 223109},
    {id: 3, email: 'mauricio@email.com', senha: 234389}
  ]);
};
