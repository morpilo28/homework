const fs = require('fs');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3200;
const CONTACT_FILE = 'contact.txt';

app.get('/', (req, res) => {
    /*async function getAllQuotes() {
        const response = await fetch('./db/db.json');
        const myJson = await response.json();
        const allQuotes = JSON.stringify(myJson);
        console.log(allQuotes);
    }
     res.send(allQuotes); */
})

app.listen(PORT, () => console.log('server on'));