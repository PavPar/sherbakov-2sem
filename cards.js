const mongoose = require('mongoose');
const dataParser = require('./dataParser');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Access-Control-Allow-Headers': 'x-requested-with',
};


const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    about: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
});

const cardModel = new mongoose.model('card', cardSchema);

const requestListener = function (req, res) {
    switch (req.method) {
        case 'GET':
            cardModel.find({})
                .then((cards) => {
                    res.writeHead(200,headers);
                    res.end(JSON.stringify(cards));
                })
                .catch((err) => {
                    res.writeHead(500,headers)
                    res.end(JSON.stringify({ errMsg: err }))
                })
            break;
        case 'POST':
            dataParser(req, res)
                .then((data) => {
                    const { name, about } = data;
                    console.log(data)
                    cardModel.create({ name, about })
                        .then(cards => {
                            res.writeHead(200,headers);
                            res.end(JSON.stringify(cards));
                        })
                        .catch((err) => {
                            res.writeHead(500,headers);
                            console.log(err)
                            res.end(JSON.stringify(err));
                        })
                })
                .catch((err) => {
                    res.writeHead(500,headers);
                    res.end(JSON.stringify(err));
                })
            break;
        default:
            res.writeHead(404,headers);
            res.end(JSON.stringify({ errMsg: "Ресурса не существует" }))
            return;
    }
}

module.exports = requestListener