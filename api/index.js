const express = require('express');
const resume = require('./resume.json');

const server = express();

server.use(express.json())

server.get('/api/resume', (req,res) => {
  res.status(200).json({resume: resume})
})

module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.send(`Hello ${name}!`)
}

module.exports = server;