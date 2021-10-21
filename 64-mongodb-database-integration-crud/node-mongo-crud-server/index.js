const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

//user: mydbuser1
//pass: ZQAtc2VR0wS9kp7b

const uri = 'mongodb+srv://mydbuser1:ZQAtc2VR0wS9kp7b@cluster0.b4chv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
	try {
		await client.connect();
		const database = client.db('foodMaster');
		const usersCollection = database.collection('users');
		// create a document to insert
		const doc = {
			name: 'special one',
			content: 'special@mail.com',
		};
		const result = await usersCollection.insertOne(doc);
		console.log(`A document was inserted with the _id: ${result.insertedId}`);
	} finally {
		await client.close();
	}
}
run().catch(console.dir);

app.get('/', (req, res) => {
	res.send('running  my crud server');
});

app.listen(port, () => {
	console.log('running server on port', port);
});
