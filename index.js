import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();
const PORT = 5000;
app.use(cors());
app.use("/route", router);

app.get("/", (req, res) => {
  res.send("E-commerce API is running...& Am trying creating new branch");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
