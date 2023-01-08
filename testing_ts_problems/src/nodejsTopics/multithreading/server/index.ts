import { calculateCount } from "./utils";
import express from 'express'
import { Worker } from "worker_threads";
import path from 'path';


export const createAndRunServerWithOneWorker = (passedPort?: number) => {

  const app = express();
  const port = !passedPort ? process.env.PORT || 3000 : passedPort;

  app.get("/non-blocking/", (req, res) => {
    res.status(200).send("This page is non-blocking");
  });

  app.get("/blocking", async (req, res) => {
    const worker = new Worker(path.resolve(__dirname, './worker.js'));

    worker.on('message', (data) => {
      res.status(200).send(`result is ${data}`);
    });

    worker.on('err', (data) => {
      res.status(200).send(`An error occurred: ${data}`);
    });
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

  return app;
}
