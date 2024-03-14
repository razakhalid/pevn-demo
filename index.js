const express = require('express');
const app = express();
const host = 'http://localhost';
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on ${host}:${port}`);
});