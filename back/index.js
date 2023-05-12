const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:5173'];
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
};
/*app.get('/', (req, res) => {
	console.log(req);
	const options = {
		root: path.join(__dirname, 'public'),
		dotfiles: 'deny',
		headers: {
			'Access-Control-Allow-Origin': 'http://localhost:5173',
			mode: 'cors',
		},
	};
	res.send(JSON.stringify({ qq: 'kekek' }));
})*/

app.use(cors(corsOptions));

app.listen(3000, (e) => console.log('damn' + e));
