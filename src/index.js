require('dotenv').config();

// Express
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');

// Database
require('./db/db');

// Template que o Node vai usar
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// })

app.get('/', (req, res) => {
    res.render('../src/views/home');
});

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});