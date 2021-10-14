'use strict';

const express = require('express');
const router = express.Router();

router.post('/signin', async (req, res) => {
    res.status(200).send('Hello World');
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await Users.post(req.body);
        res.status(200).json(record);
      } catch (e) { res.status(403).send("Error Creating User"); }
    });

    module.exports = router;