const express = require("express");
const cors = require('cors');
const authRoutes = require("./src/routes/authRoutes");
const restauranteRoutes = require("./src/routes/restauranteRoutes");

const app = express();

app.use(cors()); // Permite acesso externo
app.use(express.json()); // Permite leitura de JSON no body
app.use("/auth", authRoutes);
app.use("/restaurantes", restauranteRoutes);

// Inicia o servidor na porta 3333
app.listen(3333, () => console.log('🔥 Server running on port 3333'));