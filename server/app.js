import cors from "cors";
import routes from "./routes/router.js";
import express from 'express';
import connectDb from "./utils/db.js";
import { populateEverything } from "./utils/populateDB.js";

const app = express();
const PORT = 3000;

//Setting up cors. Might need some look into what to allow etc not super familiar
app.use(cors({ origin: "*" }));

await connectDb();

app.use("/", routes);

// Start server
try {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  await populateEverything();
} catch (error) {
  console.log(error);
}
