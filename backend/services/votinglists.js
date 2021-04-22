const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple() {
    const rows = await db.query(
        `SELECT id, band, title, score FROM listsongs`,
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

async function update(id, songList) {
    const result = await db.query(
        `UPDATE listsongs 
            SET band=?, title=?, score=? 
        WHERE id=?`,
        [
            songList.band, songList.title, songList.score, id
        ]
    );

    let message = 'Error in updating list songs';

    if (result.affectedRows) {
        message = 'list songs updated successfully';
    }

    return { message };
}


module.exports = {
    getMultiple,
    update
}
