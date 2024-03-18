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

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
