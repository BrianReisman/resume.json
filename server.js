require('dotenv').config();


const server = require('./index');

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server listeneing on PORT: ${PORT}` )
})