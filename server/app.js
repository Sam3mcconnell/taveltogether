const express = require("express");
const app = express();
const PORT = 3000;

//Setting up CORS headers to allow the client http server to make requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
//Routes (maybe to own file in the future? when the application grows)
app.get("/api/test", (req, res) => {
  res.json({ message: "fetching test" });
});

app.get("/api/getCards", (req, res) => {
  //Need to be connected to db and maybe limit the amount of cards to a certain amount or something?
  const cardsData = [
    { title: "Paris, France", description: "Explore the iconic landmarks and indulge in French cuisine." },
    { title: "Tokyo, Japan", description: "Experience the bustling streets, delicious food, and rich culture of Tokyo." },
    { title: "Bali, Indonesia", description: "Relax on pristine beaches, explore lush jungles, and discover vibrant local culture." },
    { title: "New York City, USA", description: "Immerse yourself in the energy of the city that never sleeps and explore its diverse neighborhoods." },
    { title: "Cape Town, South Africa", description: "Discover breathtaking natural landscapes, vibrant city life, and rich cultural heritage." },
    { title: "Rome, Italy", description: "Wander through ancient ruins, savor authentic Italian cuisine, and soak in the charm of the Eternal City." }
];
  res.json(cardsData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
