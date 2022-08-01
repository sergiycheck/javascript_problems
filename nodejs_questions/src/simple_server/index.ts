import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'data of the message' });
});

const listener = app.listen(3012, function () {
  console.log('App is running', listener.address());
});
