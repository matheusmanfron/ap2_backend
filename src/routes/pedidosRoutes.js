const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const auth = require("../middlewares/authMiddleware");

router.post("/", auth, async (req, res) => {
    const { restaurante_id, itens } = req.body;
    const usuario_id = req.usuarioId;

    try{
        await db.transaction(async trx =>{

            let valorTotal = 0;

            for (const item of itens){
                const itemBD = await trx("itensCardapios")
                .where({id:item.item_id, restaurante_id})
                .first();

                if(!itemBD){
                    throw new Error('Item inválido ou não pertence ao restaurante');
                }

                valorTotal += item.quantidade * itemBD.preco
            }

            const [pedidoId] = await trx("pedidos").insert({
                usuario_id,
                restaurante_id,
                valor_total: valorTotal,
                status: "pendente",
                criado_em: new Date()
            });

            for (const item of itens){
                const itemBD = await trx("itensCardapio")
                .where({ id: item.item_id })
                .first();

                await trx("pedidosItens").insert({
                    pedido_id: pedidoId,
                    item_id: item.item_id,
                    quantidade: item.quantidade,
                    preco_unitario: itemBD.preco 
                });  
            }

            return res.status(201).json({
                message: "Pedido criado com sucesso",
                pedido:{
                    id: pedidoId,
                    restaurante_id,
                    usuario_id,
                    valor_total: valorTotal,
                    itens: itens
                }
            })
        })
    }catch (err){
        console.error(err);
        return res.status(500).json({ error: "Erro ao processar o pedido.", detalhe: err.message})
    };
});

module.exports = router;