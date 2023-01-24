// const http = require('http');
// const mongodb = require('mongodb');

import * as http from "http";
import * as mongodb from "mongodb";

const hostname = '127.0.0.1'; // localhost
const port = 3000;
const url = 'mongodb://127.0.0.1:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url);

async function startServer() {
  // connect to database
  console.log("before");
  await mongoClient.connect();
  console.log("after");
  // listen for requests
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

const server = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
  let url = new URL(request.url || '', `http://${request.headers.host}`);
  switch (url.pathname) {
    case '/getGame': {
      const gameCollection = mongoClient.db('GIS').collection('Games');
      let result;
      if (url.searchParams.get('id')) {
        result = await gameCollection.findOne({
          gameId: Number(url.searchParams.get('id')), // von String zu Zahl konvertieren
        });
      }
      // else {
      //   result = await gameCollection.find({}).toArray();
      // }
      response.setHeader('Content-Type', 'application/json');
      response.write(JSON.stringify(result));
      break;
    }
    default:
      response.statusCode = 404;
  }
  response.end();
}
);

startServer();