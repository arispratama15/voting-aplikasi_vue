const express = require('express');
const router = express.Router();
const votingList = require('../services/votinglists');

// Send a GET request to READ a list of vote
/* GET list songs. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await votingList.getMultiple());
    } catch (err) {
        console.error(`Error while getting song list `, err.message);
        next(err);
    }
});

// Send a POST request to CREATE a new vote
// Send a PUT request to UPDATE (edit) a vote
/* PUT programming language */
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await votingList.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating song list`, err.message);
        next(err);
    }
});
// Send a DELETE request to DELETE a vote

module.exports = router;