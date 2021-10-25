const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b4chv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);

async function run() {
	try {
		await client.connect();
		// console.log('database connected');
		const database = client.db('onlineShop');
		const productCollection = database.collection('products');

		//get products API
		app.get('/products', async (req, res) => {
			const cursor = productCollection.find({});
			const products = await cursor.limit(10).toArray();
			res.send(products);
		});
	} finally {
		// await client.close()
	}
}

run().catch(console.dir);

app.get('/', (req, res) => {
	res.send('Ema john is running');
});

app.listen(port, () => {
	console.log('server running', port);
});
