const env = process.env;
const config = {
    db: {
        host: env.DB_HOST || 'rain.db.elephantsql.com',
        port: env.DB_PORT || 3000,
        user: env.DB_USER || 'aicrznay',
        password: env.DB_PASSWORD || 'Efu1HzwlNbGZIrbB6_t_ZN_wz3Izs7EX',
        database: env.DB_NAME || 'aicrznay'
    },
    listPerPage: env.LIST_PER_PAGE || 10
};

module.exports = config;