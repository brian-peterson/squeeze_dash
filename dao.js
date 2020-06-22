//import sqlite module
const sqlite3 = require('sqlite3').verbose();


// Data Access Object
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database')
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection');
});