const express = require('express');
const path = require('path');

const app = express();
const host = 'http://localhost';
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
app.use(express.json());

app.get('/quotes', (req, res) => {
    res.json({
        message: 'hello world'
    });
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on ${host}:${port}`);
});