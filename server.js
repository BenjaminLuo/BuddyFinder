const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
let config = require('./config.js');
const mysql = require('mysql');
// const port = process.env.PORT || 5000;
const port = 5000;

// const db = mysql.createPool(config);

app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/addInterest', (req, res) => {
	// let string = JSON.stringify(recipes);

	let connection = mysql.createConnection(config);

	let user_place = req.body.place;
	let user_activity = req.body.activity;
	let user_time = req.body.time;
	let user_id = req.body.userID;

	
	let sql = `INSERT INTO user_activity (location, action, reviewScore, time)  
	VALUES (?, ?, ?, ?, ?)`;
	console.log(sql);
	let data = [ user_place, user_activity, user_time, user_id];
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log("Sent items:" + data);
		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});

	connection.end();
});



app.post('/api/loadUserSettings', (req, res) => {

	let connection = mysql.createConnection(config);

	const name = req.body.name;
	const email = req.body.email;
	const body = req.body.body;

	console.log(req.body);

	const sqlInsert = "INSERT INTO contact_us(name, email, body) VALUES (?,?,?)";
	connection.query(sqlInsert, [name, email, body], (err, result) => {
		console.log(err);
	});

	res.send({ express: string });
});



app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
