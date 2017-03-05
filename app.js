const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
	const regexp = /\(([^\)]+)\)/;
	const software = req.headers['user-agent'].match(regexp)[0].replace('(', '').replace(')', '');
	const ip = req.ip;
	const language = req.headers['accept-language'].split(',')[0];
	res.json({ip, language, software});
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
