// Dependencies 
const express = require('express');

// Sets up the Express App
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'))

// Routes
require('./Develop/routes/apiroutes')(app);
require('./Develop/routes/htmlroutes')(app);

// Starts the server to begin listening on the po
app.listen(PORT, () => {
    console.log(`App started to listen on PORT: ${PORT}`);
  });