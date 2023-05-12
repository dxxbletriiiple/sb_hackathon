const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['https://sb-hackathon-28q49o88u-dxxbletriiiple.vercel.app'];

let rawdata = fs.readFileSync('data.json');

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
app.get('/', (req, res) => res.send(rawdata));
