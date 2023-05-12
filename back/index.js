const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['*'];
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
};

app.use(cors(corsOptions));

app.listen(3000, (e) => console.log('damn' + e));
