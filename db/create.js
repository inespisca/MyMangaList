const connection = require('./config');

connection.query(`CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(320) NOT NULL UNIQUE,
    passwordHash VARBINARY(160) NOT NULL
)`, (err) => {
    if(err) console.log(err);
    console.log('table user has been created');
});

connection.query(`CREATE TABLE list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    series VARCHAR(255),
    imgurl VARCHAR(255),
    baka VARCHAR(255),
    mal VARCHAR(255),
    readch VARCHAR(255),
    totalch VARCHAR(255),
    readvol VARCHAR(255),
    totalvol VARCHAR(255),
    status VARCHAR(255)
)`, (err) => {
	if (err) console.log(err);
    console.log('table list has been created');
    connection.end();
});