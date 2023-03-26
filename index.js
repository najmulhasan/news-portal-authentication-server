const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());



// API CREATION

app.get('/', (req, res) => {
    res.send('News API Running');
})

app.listen(port, () => {
    console.log('Dragon News Running', port);
})

// Data getting process from json file
const categories = require('./data/categories.json');

app.get('/news-categories', (req, res) => {
    res.send(categories);
})