import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "testando o get" });
});

app.listen(3333);
