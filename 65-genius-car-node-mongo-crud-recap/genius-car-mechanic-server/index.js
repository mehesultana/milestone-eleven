const express = require('express');
const { MongoClient } = require('mongodb');
const objectId = require('mongo').objectId;

const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b4chv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
	try {
		await client.connect();
		// console.log('connected to database');

		const database = client.db('carMechanic');
		const servicesCollection = database.collection('services');

		// get API
		app.get('/services', async (req, res) => {
			const cursor = servicesCollection.find({});
			const services = await cursor.toArray();
			res.send(services);
		});

		// get single service
		app.get('/services/:id', async (req, res) => {
			const id = req.params.id;
			console.log('getting specific service', id);
			const query = { _id: objectId(id) };
			const survice = await servicesCollection.findOne(query);
			res.json(service);
		});

		// post API
		app.post('/services', async (req, res) => {
			const service = req.body;

			console.log('hit the post api', service);

			// const service = {
			// 	name: 'ENGINE DIAGNOSTIC',
			// 	price: '300',
			// 	description: 'Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.',
			// 	img: 'https://i.ibb.co/dGDkr4v/1.jpg',
			// };
			const result = await servicesCollection.insertOne(service);
			console.log(result);
			res.json(result);
		});
	} finally {
		// await client.close()
	}
}

run().catch(console.dir);

app.get('/', (req, res) => {
	res.send('Running');
});

app.listen(port, () => {
	console.log('running genius server on port', port);
});
