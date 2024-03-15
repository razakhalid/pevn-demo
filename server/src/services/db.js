const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({ connectionString: config.db.connectionString });

function connect() {
    pool.connect((err, client, done) => {
        if (err) {
            return console.error('could not connect to postgres', err);
        } else {
            console.log('connected to postgres');
        }
    })
}

async function query(query) {
    return await pool.query(query);
}

module.exports = {
    connect,
    query
}