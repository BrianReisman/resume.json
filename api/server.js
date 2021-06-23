require('dotenv').config();

const server = require('./index.js');

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`server listeneing on PORT: ${PORT}` )
})