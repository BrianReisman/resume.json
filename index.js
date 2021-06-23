const express = require('express');
const resume = require('./resume.json');

const server = express();

server.use(express.json())

server.get('/', (req,res) => {
  res.status(200).json({resume: resume})
})

module.exports = server;