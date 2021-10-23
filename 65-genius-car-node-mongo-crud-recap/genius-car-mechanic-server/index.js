const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

const uri = 'mongodb+srv://mydbuser1:<password>@cluster0.b4chv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.get('/', (req, res) => {
	res.send('Running');
});

app.listen(port, () => {
	console.log('running genius server on port', port);
});
