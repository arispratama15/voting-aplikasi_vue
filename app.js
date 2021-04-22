const express = require('express');
const app = express();
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ris',
  password: 'welcome@123',
  database: 'harga_pajak'
})

// Send a GET request to READ a list of vote
app.get('/vote', (req, res)=>{
    res.json({greeting: "Hello World!"});
  });
// Send a GET request to READ (view) a vote
// Send a POST request to CREATE a new vote
// Send a PUT request to UPDATE (edit) a vote
// Send a DELETE request to DELETE a vote

app.listen(3000, () => console.log('Vote API listening on port 3000!'));
