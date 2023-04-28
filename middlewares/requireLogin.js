module.exports = (err, res, req, next) => {
    if (!req.user) {
        console.log(err);
        return res.status(401).send({ error: 'You must be logged in' });
    }

    next();
};
