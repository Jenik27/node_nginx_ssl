const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Hello World! This is my node app </h1>');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});