import { Router } from "express";
import produstoRouter from "./produto.router.js";

const router = Router();

router.use("/produtos", produstoRouter);

export default router;