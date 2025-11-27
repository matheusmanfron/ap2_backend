const authService = require("../services/authService");

module.exports = {
    async register(req, res){
        const { email, senha } = req.body;

        try{
            const id = await authService.register({ email, senha });
            return res.status(201).json({ mensagem: "Usuário criado", id});
        }catch(err){
            return res.status(500).json({ mensagem: "Erro ao registrar usuário" });
        }
    },

    async login(req, res){
        const{ email, senha } = req.body;

        try{
            const token = await authService.login({email, senha});
            if(!token) return res.status(401).json({ mensagem: "Credenciais inválidas"});

            return res.json({ token });
        }catch (err){
            return res.status(500).json({ mensagem: "Erro ao fazer login"});
        }
    }
}