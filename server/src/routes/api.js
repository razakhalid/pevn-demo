const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');

router.get('/quotes', async (req, res, next) => {
    try {
        const q = await quotes.getMultiple(req.query.page);
        res.json(q);
    } catch (err) {
        console.error(`Error while getting quotes: ${err.message}`);
        next(err);
    }
});

module.exports = router;