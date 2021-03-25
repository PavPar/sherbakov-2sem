module.exports = (req, res) => {
    return new Promise((resolve, reject) => {
        let data = [];
        try {
            req.on('data', chunk => {
                data.push(chunk)
            })

            req.on('end', () => {
                resolve(JSON.parse(data))
            })
        }
        catch {
            reject({ err: "Bad request" });
        }
    })
}