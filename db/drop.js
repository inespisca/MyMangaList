const connection = require('./config');

const dropUser = new Promise(
	(resolve, reject) => connection.query('DROP TABLE user', (err) => {
		if (err) reject(err);
		console.log('user table has been dropped');
		resolve();
	})
);

const dropList = new Promise(
	(resolve, reject) => connection.query('DROP TABLE list', (err) => {
		if (err) reject(err);
		console.log('list table has been dropped');
		resolve();
	})
);

dropUser
    .then(() =>
        
        dropList
            .then(() => 
                console.log('OK!')
            )
            .then(() => 
                connection.end()
            )
    )
	.catch(err => {
		console.log(err);
		connection.end();
	});