const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    console.log('Resolved file path:', filePath);
    res.sendFile(filePath);
});

app.get('/about', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'about.html');
    console.log('Resolved file path:', filePath);
    res.sendFile(filePath);
});

app.get('/signup', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'signup.html');
    console.log('Resolved file path:', filePath);
    res.sendFile(filePath);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});