const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();
const port = 3000;
const { getHomePage} = require('./routes/index');
const game = require('./routes/game');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from "public"
app.use(express.static('public'));

// Routes
app.get('/', getHomePage);
app.get('/add-game', game.getAdd);
app.post('/add-game', game.postAdd);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
