const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router();

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/views/index.html')));

app.post('/', (req, res) => res.sendFile(path.join(__dirname+'/views/locate.html')));

app.get('/ubicar', (req, res) => res.sendFile(path.join(__dirname+'/views/locate.html')));

app.listen(port, () => console.log(`Express app running on port ${port}!`));