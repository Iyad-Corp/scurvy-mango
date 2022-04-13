/**
 * @param {import("supertokens-node/framework/express").SessionRequest} req 
 * @param {*} res 
 */
function hello(req, res) {
    console.log('[ STATUS ] GET /hello -', Date());

    let message = '';

    if (req.session !== undefined) {
        let userId = req.session.getUserId();
        message = `Hello ${userId} from the Scurvy Mango backend!`;
    } else {
        message = `I don't greet unauthenticated users.`;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'message': message }));
}

export default hello;