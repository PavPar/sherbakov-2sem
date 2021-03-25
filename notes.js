const mongoose = require('mongoose');
const dataParser = require('./dataParser');

const noteSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
});

const noteModel = new mongoose.model('note', noteSchema);

const requestListener = function (req, res) {
    switch (req.method) {
        case 'GET':
            noteModel.find({})
                .then((notes) => {
                    res.writeHead(200);
                    res.end(JSON.stringify(notes));
                })
                .catch((err) => {
                    res.writeHead(500)
                    res.end(JSON.stringify({ errMsg: err }))
                })
            break;
        case 'POST':
            dataParser(req, res)
                .then((data) => {
                    const { name, about } = data;
                    noteModel.create({ name, about })
                        .then(notes => {
                            res.writeHead(200);
                            res.end(JSON.stringify(notes));
                        })
                        .catch((err) => {
                            res.writeHead(500);
                            res.end(JSON.stringify(err));
                        })
                })
                .catch((err) => {
                    res.writeHead(500);
                    res.end(JSON.stringify(err));
                })
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ errMsg: "Ресурса не существует" }))
            return;
    }
}

module.exports = requestListener