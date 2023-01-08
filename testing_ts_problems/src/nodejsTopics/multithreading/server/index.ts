import { calculateCount } from "./utils";

const express = require("express");

export const createAndRunServer = () => {

  const app = express();
  const port = process.env.PORT || 3000;

  app.get("/non-blocking/", (req, res) => {
    res.status(200).send("This page is non-blocking");
  });

  app.get("/blocking", async (req, res) => {
    const counter = await calculateCount()
    res.status(200).send(`result is ${counter}`);
  });


  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

  return app;
}
