module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/vote4episodes'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

};
