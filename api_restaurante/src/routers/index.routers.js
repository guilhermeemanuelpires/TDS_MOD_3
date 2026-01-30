import { Router } from "express";
import produtoRouter from "./produto.router.js";

const routers = Router();

routers.use("/produtos", produtoRouter);

export default routers;