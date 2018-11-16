const express = require('express');
const getTrendingRepos = require('./getTrendingRepos');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', getTrendingRepos);

app.listen(port, () => console.log(`Listening on port ${port}!`));
