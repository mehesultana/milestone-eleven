const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('hello from my Second node server .');
});

const users = [
	{ id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
	{ id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
	{ id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
	{ id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
	{ id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
	{ id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
];

app.get('/users', (req, res) => {
	res.send(users);
});

app.get('/users/:id', (req, res) => {
	const id = req.params.id;
	const user = users[id];
	res.send(user);
});

app.listen(port, () => {
	console.log('listening to port', port);
});
