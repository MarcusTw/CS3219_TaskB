let jwt = require('jsonwebtoken');

exports.login = function(req, res) {
    const loginDetails = {
        id: 1,
        username: "marcus",
        email: "marcus@gmail.com"
    };

    const accessToken = jwt.sign({user: loginDetails}, process.env.ACCESS_TOKEN_SECRET);
    res.json({token: accessToken});
};

// Verify Token
exports.verifyToken = function(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}