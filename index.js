const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());

const categories = require('./data/categories.json');
const posts = require('./data/posts.json');
const groups = require('./data/groups.json');


// api's
app.get('/', (req, res) => {
   res.send('ATG World API is running');
})

app.get('/posts', (req, res) => {
   res.send(posts);
})

app.get('/article', (req, res) => {
   const articles = posts.filter(article => article.category.name === "Article");
   res.send(articles);
})

app.get('/event', (req, res) => {
   const events = posts.filter(event => event.category.name === "Event");
   res.send(events);
})

app.get('/education', (req, res) => {
   const education = posts.filter(edu => edu.category.name === "Education");
   res.send(education);
})

app.get('/job', (req, res) => {
   const jobs = posts.filter(job => job.category.name === "Job");
   res.send(jobs);
})

app.listen(port, () => {
   console.log('ATG World server is running on port', port)
})
