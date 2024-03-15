const express = require('express');
const path = require('path');
const api = require('./routes/api');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./services/db');

const host = 'http://localhost';
const port = 3000;
const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
app.use(api);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

(function start() {
    db.connect();
    app.listen(port, () => {
        console.log(`Listening on ${host}:${port}`);
    });
})();