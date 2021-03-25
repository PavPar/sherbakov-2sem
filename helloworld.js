const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
};

const requestListener = function (req, res) {
    switch (req.method) {
        case 'GET':
            res.writeHead(200, headers);
            res.end(JSON.stringify({ msg: "HELLO WORLD!" }));
            break;
        default:
            res.writeHead(404, headers);
            res.end(JSON.stringify({ errMsg: "Ресурса не существует" }));
            return;
    }
}

module.exports = requestListener