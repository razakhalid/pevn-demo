const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./services/db');

const app = express();
const host = 'http://localhost';
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
app.use(express.json());

app.get('/quotes', async (req, res) => {
    const { rows } = await db.query('select id, quote, author from quote');
    res.json({
        quotes: rows
    });
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

(function start() {
    db.connect();
    app.listen(port, () => {
        console.log(`Listening on: ${host}/${port}`);
    })
})();
