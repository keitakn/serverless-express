import * as lambda from 'aws-lambda';
import * as awsServerlessExpress from 'aws-serverless-express';
import app from './app';

const binaryMimeTypes = [
  'application/javascript',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
  'text/html',
];

const server = awsServerlessExpress.createServer(
  app,
  undefined,
  binaryMimeTypes,
);

const expressHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
) => {
  return awsServerlessExpress.proxy(server, event, context);
};

export default expressHandler;
