import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("E-commerce API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
