import { Router } from "express";
import produtoController from "../controller/produto.controller.js";
const routers = Router();

//CRUD
routers.post("/cadastrar", produtoController.cadastrar);
routers.put("/atualizar", produtoController.atualizar);
routers.delete("/deletar", produtoController.deletar);
routers.get("/consultar", produtoController.consultar);

export default routers;