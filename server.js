require('dotenv').config();
//Test .env file, put .env in .gitignore
//console.log(process.env.SECRET_KEY)
const http = require('http');

const app = require('./app')

const server = http.createServer(app);

const port = 3001;



server.listen(port, (err) => {
    console.log(`server is listening on :${port}`);
});