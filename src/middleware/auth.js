const adminAuth = (req, res, next) => {
    const token = 'xyz';
    const isAutorized = token == 'xyz';
    if(!isAutorized) {
        res.status(401).send('Access Unauthorized');
    }
    else {
        next();
    }
}

module.exports = {
    adminAuth,
}