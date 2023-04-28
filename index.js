const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

const app = express();

app.use( cors() );
app.use( bodyParser.json() );

app.use('/', (request, response) => {
    response.send(`Newly created Express App!`)
});

app.listen( PORT, () => { 
    console.log(`App is running on port ${PORT}`);
});