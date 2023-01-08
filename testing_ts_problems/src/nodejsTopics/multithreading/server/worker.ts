import { workerData, parentPort } from "worker_threads";
import { WorkerDataCurrent } from "./types";
import { calculateFrom0To20billions } from "./utils";

const workerDataCurrent: WorkerDataCurrent = workerData;
if (workerDataCurrent) {
  parentPort.postMessage(calculateFrom0To20billions(workerDataCurrent.thread_count))
} else {
  parentPort.postMessage(calculateFrom0To20billions())

}