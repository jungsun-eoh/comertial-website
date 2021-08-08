const express = require('express');
const { MongoClient } = require('mongodb');
// const redis = require('redis');
// const client = redis.createClient({
//   host: process.env.REDIS_HOST || 'localhost',
// });

// monogo init
const url = process.env.MONGO_HOST || 'mongodb://localhost:27017';
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect((err) => {
  if (err) console.log(err);
  const db = mongoClient.db('test101');
  // move app logic in here
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded());

  app.post('/listing/createListing', (req, res) => {
    console.log(req.body);
    db.collection('listings')
      .insertOne({ data: req.body })
      .then(() => console.log('db insert worked'))
      .catch((e) => console.log(e));
    res.send('ok');
  });

  app.get('/listing/viewListings', (req, res) => {
    db.collection('listings')
      .find({})
      .toArray()
      .then((result) => {
        res.send(result.map((r) => r.data));
      })
      .catch((e) => console.log(e));
  });

  app.listen(5001);
  // end app logic
});
