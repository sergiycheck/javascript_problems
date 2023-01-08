import express from 'express'
import { Worker } from "worker_threads";
import path from 'path';
import { WorkerDataCurrent } from './types';
import os from 'os';

const cores = os.cpus();

const THREAD_COUNT = cores.length;
function createWorker(workerPath: string) {
  return new Promise(function (resolve, reject) {

    const workerData: WorkerDataCurrent = {
      thread_count: THREAD_COUNT
    }
    const worker = new Worker(workerPath, {
      workerData
    });

    worker.on('message', (data) => {
      resolve(data);
    });

    worker.on('err', (data) => {
      reject(`An error occurred: ${data}`)
    });
  });
}

export const createAndRunServerWithFourWorkers = (passedPort?: number) => {

  const app = express();
  const port = !passedPort ? process.env.PORT || 3000 : passedPort;

  app.get("/non-blocking/", (req, res) => {
    res.status(200).send("This page is non-blocking");
  });

  app.get("/blocking", async (req, res) => {
    const workerPath = path.resolve(__dirname, './worker.js');

    const workerPromises = [];
    for (let i = 0; i < THREAD_COUNT; i++) {
      workerPromises.push(createWorker(workerPath));
    }

    const thread_results = await Promise.all(workerPromises);
    const total =
      thread_results[0] +
      thread_results[1] +
      thread_results[2] +
      thread_results[3];
    res.status(200).send(`result is ${total}`);

  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

  return app;
}
