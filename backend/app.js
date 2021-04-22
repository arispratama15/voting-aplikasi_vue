const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const listVotingRouter = require('./routes/votinglists');

// CORS config
app.use(cors())

// Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Send a GET request to READ a list of vote
app.use('/vote', listVotingRouter);
/*
app.get('/vote', (req, res)=>{
    connection.connect()
        connection.query(`SELECT * from listsongs`, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
        });
});
*/
// Send a POST request to CREATE a new vote
// Send a PUT request to UPDATE (edit) a vote
// Send a DELETE request to DELETE a vote

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });

    return;
});

app.listen(3001, () => console.log('Vote API listening on port 3000!'));
