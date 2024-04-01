import { Router } from "express";
import { getCards, getCardDetails, postItinerary, postNewUser } from "../controller/controller.js";

const routes = Router();

routes.get("/api/getCards",getCards)

routes.get("/api/getCardDetails",getCardDetails)

routes.post("/api/postItinerary",postItinerary)

routes.post("/api/postNewUser",postNewUser)

export default routes;