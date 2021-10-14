'use strict';

const validator = (req, res, next) => {
    let name =  req.query.name;
    (!name)
    next();
}

module.exports = validator;