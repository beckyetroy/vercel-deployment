const express = require('express');
const axios = require('axios');

const app = express();

exports.handler = app.get('/movies/discover', async (req, res) => {
  await axios.get(`http://localhost:8080/api/movies/discover`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.get('/movies/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await axios.get(`http://localhost:8080/api/movies/${id}`)
    .then(response => res.send(response.data)).then(console.log(response.data))
    .catch(err => res.send(err));
});

app.get('/reviews/:id', async (req, res) => {
  const id = req.params.id;
  await axios.get(`http://localhost:8080/api/reviews/${id}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

module.exports = app;