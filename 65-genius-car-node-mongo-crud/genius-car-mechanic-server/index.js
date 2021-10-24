const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

const uri = 'mongodb+srv://<username>:<password>@cluster0.b4chv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
	res.send('running server');
});

app.listen(port, () => {
	console.log('running on port', port);
});
