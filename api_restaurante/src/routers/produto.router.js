import { Router } from "express";
import produtoController from "../controller/produto.controller.js";
const router = Router();

//CRUD
router.post("/cadastrar", produtoController.cadastrar);
router.put("/atualizar", produtoController.atualizar);
router.delete("/deletar", produtoController.deletar);
router.get("/consultar", produtoController.consultar);

export default router;