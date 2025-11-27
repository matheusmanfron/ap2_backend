const express = require("express");
const router = express.Router();
const restauranteController = require("../controllers/restauranteController");
const auth = require("../middlewares/authMiddleware");

router.get("/", restauranteController.listar);
router.get("/:id/itens", restauranteController.listarItens);

module.exports = router;