const db = require("../../db/connection");

module.exports = {
    async listar(req, res){
        try{
            const restaurantes = await db("restaurantes").select("*");
            return res.json(restaurantes);
        }catch (err){
         return res.status(500).json({ mensagem: "Erro ao listar restaurantes"});  
        }
    },

    async listarItens(req, res){
        const { id } = req.params;

        try{
            const itens = await db("itensCardapios").where({restaurante_id: id});
            return res.json(itens);
        }catch (err){
            return res.status(500).json({ mensagem: "Erro ao listar itens do restaurante"});
        }
    }
};