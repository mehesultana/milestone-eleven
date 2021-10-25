const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('runningggggggggggggggggggggggggg');
});

app.listen(port, () => {
	console.log('running the port', port);
});
