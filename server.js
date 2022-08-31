const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4040

// assigning middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => setTimeout(next, 1500))

// starting server to list on provided port
app.listen(port, error => {
    if (error) throw error;
    console.log(`Server is listening on port: ${port}`);
});


app.get('/user', (req, res) => {
    printInfo('Requesting user data');
    res.json({ name: 'Kapil Bastola', email: 'kapilmuni209@gmail.com', age: 27 });
})

app.post('/user', (req, res) => {   
    if( req.body?.email.includes('fail') ){
        printError('Getting error response');
        res.status(400).json({ error: 'Unknown Error'});
    }
    printInfo('Posting user data');
    res.json({ ...req.body })
});



// utils functions
const printInfo = (text) => console.log(`[INFO]: ${text}`);
const printError = (text) => console.log(`[ERROR]: ${text}`);