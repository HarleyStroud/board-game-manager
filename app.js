const express = require('express');
const app = express();
const port = 3000;
const { getHomePage} = require('./routes/index');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from "public"
app.use(express.static('public'));

// Routes
app.get('/', getHomePage);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
