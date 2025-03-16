import express from "express";

const router = express();
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Everything is okay",
  });
});
export default router;
