const http = require('http');
const cardsController = require('./cards')
const mongoose = require('mongoose');
const notesController = require('./notes')
const mainController = require('./helloworld')

mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log('SUCCESS: DB connected');
    })
    .catch(() => {
        console.log('FAILED: DB Connection');
    });

const requestListener = function (req, res) {
  

    res.setHeader('Content-Type', 'application/json');
    switch (req.url) {
        case '/cards':
            cardsController(req, res)
            break;
        case '/notes':
            notesController(req, res)
            break;
        case '/':
            mainController(req, res)
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'Not Found' }));
    }
}

const server = http.createServer(requestListener);
server.listen(8080);