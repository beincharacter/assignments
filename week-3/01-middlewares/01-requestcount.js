const express = require('express');
const request = require('supertest');
const assert = require('assert');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

// Middleware to count requests
const countRequests = (req, res, next) => {
  requestCount++;
  next();
};

// Apply the middleware globally
app.use(countRequests);

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', (req, res) => {
  res.status(200).json({ requestCount });
});

module.exports = app;
