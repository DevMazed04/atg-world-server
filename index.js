const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const posts = require('./data/posts.json');
const groups = require('./data/groups.json');

app.get('/', (req, res) => {
   res.send('ATG World API is running');
})

app.listen(port, () => {
   console.log('ATG World server is running on port', port)
})
