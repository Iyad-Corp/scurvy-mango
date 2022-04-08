function hello(req, res) {
    console.log('[ STATUS ] GET /hello -', Date());

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'message': 'Hello World from the Scurvy Mango backend!' }));
}

module.exports = hello;