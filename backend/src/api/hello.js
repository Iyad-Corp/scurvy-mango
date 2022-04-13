function hello(req, res) {
    console.log('[ STATUS ] GET /hello -', Date());

    // req should be a supertokens SessionRequest object
    let userId = req.session.getUserId();

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'message': 'Hello World from the Scurvy Mango backend!' }));
}

export default hello;