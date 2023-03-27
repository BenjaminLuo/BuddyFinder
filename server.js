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

let today = new Date();



app.post('/api/addInterest', (req, res) => {
	// let string = JSON.stringify(recipes);

	let connection = mysql.createConnection(config);

	let user_place = req.body.place;
	let user_activity = req.body.activity;
	let user_time = req.body.time;
	let user_id = req.body.userID;


	let sql = `INSERT INTO user_activity (location, action, time, user_id)  
	VALUES (?, ?, ?, ?)`;
	console.log(sql);
	let data = [user_place, user_activity, user_time, user_id];
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

app.get('/api/getUsersArray', (req, res) => {
	// let string = JSON.stringify(recipes);

	let connection = mysql.createConnection(config);
	
	let sql = `SELECT display_name FROM user_settings`;
	console.log(sql);
	let data = [];

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/contactUs', (req, res) => {
	let connection = mysql.createConnection(config);

	let name = req.body.name;
	let body = req.body.body;
	let email = req.body.email;
	let user_id = req.body.userID;
	let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

	let sql = `INSERT INTO contact_us (name, body, user_id, email, date) VALUES (?, ?, ?, ?, ?)`;
	connection.query(sql, [name, body, user_id, email, date], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		res.send({ express: string });
	});

	connection.end();
});

app.post('/api/addChat', (req, res) => {
	// let string = JSON.stringify(recipes);

	let connection = mysql.createConnection(config);

	let user_post = req.body.post;
	let user_ran = req.body.ran;
	let user_id = req.body.userID;


	let sql = `INSERT INTO chat (content, user_to, user_id)  
	VALUES (?, ?, ?)`;
	console.log(sql);
	let data = [user_ran, user_post, user_id];
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

app.post('/api/getUserSettings', (req, res) => {
	let connection = mysql.createConnection(config);
	let sql = `SELECT * from user_settings WHERE user_id="${req.body.userID}"`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		res.send(results);
	});

	connection.end();
});

app.post('/api/updateUserSettings', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `
		INSERT INTO user_settings (user_id, ${req.body.fieldToChange})
		VALUES ("${req.body.userID}", "${req.body.newVal}")
		ON DUPLICATE KEY UPDATE
		${req.body.fieldToChange}="${req.body.newVal}"`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		res.send({ express: string });
	});

	connection.end();
});



app.post('/api/getUserList', (req, res) => {
	let connection = mysql.createConnection(config);
	let sql = `SELECT * from user_settings`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}
		res.send(results);
	});

	connection.end();
});

app.post('/api/getFriendList', (req, res) => {
	let connection = mysql.createConnection(config);
	let sql = `SELECT addressee from friend_list WHERE requester="${req.body.userID}"`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}
		res.send(results.map(item => item.addressee));
	});

	connection.end();
});

app.post('/api/getBlockList', (req, res) => {
	let connection = mysql.createConnection(config);
	let sql = `SELECT addressee from block_list WHERE requester="${req.body.userID}"`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}
		res.send(results.map(item => item.addressee));
	});

	connection.end();
});

app.post('/api/addUser', (req, res) => {
	let connection = mysql.createConnection(config);
	let sql = `INSERT INTO ${req.body.action}_list (requester, addressee)
		VALUES ("${req.body.userID}", "${req.body.addressee}")`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}
		res.send(results);
	});

	connection.end();
});

app.post('/api/removeUser', (req, res) => {
	let connection = mysql.createConnection(config);
	let sql = `DELETE FROM ${req.body.action}_list 
		WHERE requester="${req.body.userID}" 
		AND addressee="${req.body.addressee}"`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}
		res.send(results);
	});

	connection.end();
});



app.post('/api/getUserGoals', (req, res) => {
	let connection = mysql.createConnection(config);
	let sql = `SELECT * from goal_tracking WHERE user_id="${req.body.userID}"`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		res.send(results);
	});

	connection.end();
});

app.post('/api/updateUserGoals', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `
		UPDATE goal_tracking
		SET completed=1, date="${today.getFullYear()}-${today.getMonth()}-${today.getDate()}" 
		WHERE id=${req.body.goalID}`;

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		res.send({ express: string });
	});

	connection.end();
});

app.post('/api/addUserGoals', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `
		INSERT into goal_tracking (
			id, goal, user_id
		) VALUES (
			${req.body.id}, "${req.body.goal}", ${req.body.userID}
		) ON DUPLICATE KEY UPDATE
			goal = "${req.body.goal}"`

	connection.query(sql, [], (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		res.send({ express: string });
	});

	connection.end();
});



app.post('/api/searchActivity', (req, res) => {
	// let string = JSON.stringify(recipes);

	let connection = mysql.createConnection(config);

	let user_place = req.body.place;
	let user_activity = req.body.activity;
	let user_time = req.body.time;
	let user_id = req.body.userID;

	let sql = `SELECT * FROM user_activity ua, user_settings us WHERE us.user_id = ua.user_settings_user_id`;
	let data = [];

	if (user_place) {
		sql = sql + ` AND ua.location = ?`;
		data.push(user_place);
	}
	if (user_activity) {
		sql = sql + ` AND ua.action = ?`;
		data.push(user_activity);
	}
	if (user_time) {
		sql = sql + ` AND ua.time = ?`;
		data.push(user_time);

	}

	console.log(sql);
	console.log(data);

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

app.post('/api/addPeople', (req, res) => {
	// let string = JSON.stringify(recipes);

	let connection = mysql.createConnection(config);

	let user_number = req.body.final;
	let user_id = req.body.userID;

	let sql = `INSERT INTO user_similar (group, user_settings_user_id)  
	VALUES (?, ?)`;
	let data = [user_number, userID];

	console.log(sql);
	console.log(data);

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


app.post('/api/searchPeople', (req, res) => {
	// let string = JSON.stringify(recipes);

	let connection = mysql.createConnection(config);

	let user_number = req.body.final;

	let sql = `SELECT * FROM user_similar us WHERE us.group = ?`;
	let data = [user_number];

	console.log(sql);
	console.log(data);

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


app.post('/api/addCalendar', (req, res) => {
	// let string = JSON.stringify(recipes);

	let connection = mysql.createConnection(config);

	let user_eventName = req.body.eventName;
	let user_startTime = req.body.startTime;
	let user_endTime = req.body.endTime;
	let user_id = req.body.userID;


	let sql = `INSERT INTO user_calendar (event, start, end, user_id)  
	VALUES (?, ?, ?, ?)`;
	console.log(sql);
	let data = [user_eventName, user_startTime, user_endTime, user_id];
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


app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
