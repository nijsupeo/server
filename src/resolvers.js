// get the client
import mysql from 'mysql2/promise';

const locations = async () => {
	// create the connection to database
	const connection = await mysql.createConnection({
		host: '87.48.44.194',
		user: 'nickidk4',
		password: 'Kode2139',
		database: 'warehouse'
	});

	const [rows, fields] = await connection.execute(
		'SELECT * FROM locations'
	);
	console.log(rows);
	return rows;
};

const createLocation = async () => {
	// create the connection to database
	const connection = await mysql.createConnection({
		host: '87.48.44.194',
		user: 'nickidk4',
		password: 'Kode2139',
		database: 'warehouse'
	});
	await connection.execute(
		'INSERT INTO locations (location) VALUES (test)'
	);
};


export const resolvers = {

	Query: {
		locations
	},
	Mutation: {
		createLocation: (root, args) => {
			const newLocation = {location: args.location};
			return newLocation;
		},
	},
};
