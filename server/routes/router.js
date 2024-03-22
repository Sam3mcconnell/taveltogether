import { Router } from "express";
import { getCards, getCardDetails } from "../controller/controller.js";

const routes = Router();

routes.get("/api/getCards",getCards)

routes.get("/api/getCardDetails",getCardDetails)

export default routes;