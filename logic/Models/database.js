const url = process.env.DB_URL
const mongodb = require('mongodb');
const client = new mongodb.MongoClient(url);

const DB = {}

client.connect(() => {
    console.log('mongodb connected');
    const db = client.db("DSS");
    DB.nut = db.collection("nut");
})

module.exports = DB;