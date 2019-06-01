import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { eventContext } from 'aws-serverless-express/middleware';

const app = express();

app.use(compression());
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(eventContext());
}

app.get('/express', async (req: Request, res: Response) => {
  const body = {
    ip: req.ip,
    baseUrl: req.baseUrl,
  };

  return res
    .status(200)
    .header('Content-Type', 'application/json')
    .json(body);
});

export default app;
