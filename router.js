import express, { Router } from "express";

const route = express();
route.get("/", (req, res) => {
  res.send(200).json({
    message: "Everything is okay",
  });
});
export default route;
