const db = require("../../db/connection");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

module.exports = {
    async register({email, senha}){
        const hash = await bcrypt.hash(senha, 10);

        const[id] = await db("usuarios").insert({
            email,
            senha:hash
        });
        return id;
    },

    async login({email, senha}){
        const usuario = await db("usuarios").where({ email }).first();

        if (!usuario) return null;

        const match = await bcrypt.compare(senha, usuario.senha);
        if (!match) return false;

        const token = JWT.sign(
            {id: usuario.id, email: usuario.email},
            process.env.JWT_SECRET,
            { expiresIn: "8h" }
        );

        return token;
    }
};