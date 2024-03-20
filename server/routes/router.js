import { Router } from "express";
import { getCards } from "../controller/controller.js";

const routes = Router();

routes.get("/api/getCards",getCards)

export default routes;