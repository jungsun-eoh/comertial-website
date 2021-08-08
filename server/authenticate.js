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

  app.post('/auth/authenticate', (req, res) => {
    console.log(req.body);
    // get all users
    db.collection('users')
      .find({ 'data.userName': req.body.userName })
      .toArray()
      .then((result) => {
        if (result.length == 1) {
          if (result[0].data.password == req.body.password) {
            res.send({ userName: req.body.userName, isLoggedIn: true });
          } else {
            console.log('wrong password');
            res.send({ userName: null, isLoggedIn: false });
          }
        } else if (result.length == 0) {
          db.collection('users')
            .insertOne({ data: req.body })
            .then(() => console.log('db insert worked'))
            .catch((e) => console.log(e));
          res.send({ userName: req.body.userName, isLoggedIn: true });
        } else {
          res.status(400).send('error');
        }
      });
  });

  app.get('/auth/authenticate', (req, res) => {
    db.collection('users')
      .find({})
      .toArray()
      .then((result) => {
        res.send(result.map((r) => r.data));
      })
      .catch((e) => console.log(e));
  });

  app.listen(5002);
  // end app logic
});
