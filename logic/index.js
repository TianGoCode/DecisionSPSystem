const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const DB = require('./Models/database');

app.use(express.json());
app.use(cors());

const port = process.env.PORT


app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})