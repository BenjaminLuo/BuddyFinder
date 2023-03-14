// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const app = express();
// let config = require('./config.js');
// const mysql = require('mysql');
// // const port = process.env.PORT || 5000;
// const port = 5000;

// // const db = mysql.createPool(config);

// app.use(cors());
// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }));

let mysql = require('mysql');
let config = require('./config.js');
const fetch = require('node-fetch');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { response } = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

// Contact Us: Uploads user form output to system
app.post('/api/contactUs', (req, res) => {

	let connection = mysql.createConnection(config);

	const name = req.body.name;
	const email = req.body.email;
	const body = req.body.body;

	console.log(req.body);

	// not having a primary key might be an issue
	const sqlInsert = "INSERT INTO contact_us(ticket_id, name, email, body) VALUES (1,?,?,?)";
	connection.query(sqlInsert, [name, email, body], (err, result) => {
		console.log(err);
	});

	res.send({ express: string });
});



app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
