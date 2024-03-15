const { Pool } = require('pg');
const config = require('../config');
const url = 'postgres://aicrznay:Efu1HzwlNbGZIrbB6_t_ZN_wz3Izs7EX@rain.db.elephantsql.com/aicrznay';
const pool = new Pool({
    connectionString: url
});

function connect() {
    pool.connect((err, client, done) => {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
        else {
            console.log('connected to postgres');
        }
    });
}

async function query(query, params) {
    return await pool.query(query);
}

module.exports = {
    connect,
    query
}