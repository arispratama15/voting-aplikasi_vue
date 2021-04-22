const config = {
    db: { /* don't expose password or any sensitive info, done only for demo */
        host: 'localhost',
        user: 'ris',
        password: 'welcome@123',
        database: 'votedb',
    },
};


module.exports = config;
