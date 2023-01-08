#! /bin/sh

exec yarn run ts-node ./src/index.ts A & \
   yarn run ts-node ./src/index.ts B & \
  yarn run ts-node ./src/index.ts C
