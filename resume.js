const express = require('express');
const resume = require('./resume.json');

const server = express();
server.use(express.json())

server.get('/resume', (req, res) => res.status(200).json({resume: resume}))

server.get('/', (req, res) => res.status(201).json({message: '201 testing'}))

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => console.log(`server listeneing on PORT: ${PORT}` ))