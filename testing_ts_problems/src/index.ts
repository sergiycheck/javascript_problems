import { createAndRunServerWithOneWorker } from "./nodejsTopics/multithreading/server";
import { createAndRunServerWithFourWorkers } from "./nodejsTopics/multithreading/server/indexFourWorkers";


(function main() {
  createAndRunServerWithOneWorker(3000);
  createAndRunServerWithFourWorkers(3001);
})();
