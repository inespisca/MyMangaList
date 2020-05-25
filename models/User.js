const connection = require('../db/config');

const User = {};

const cleanUser = (user) => ({
        ...user,
        passwordHash: 'hidden'
    })
 

User.create = (userInfo, callback) => {
    connection.query(
        `INSERT INTO user (username, passwordHash)
            VALUES (
                ?,
                SHA(?)
            )
        `,
        [userInfo.username, userInfo.password],
        (err, results, fields) => callback(err, results, fields)
    )
}

User.findByUsernameAndPassword = (username, password, callback) => {
    connection.query(
        `SELECT * FROM user WHERE username = ? AND passwordHash = SHA(?)`,
        [username, password],
        (err, results, fields) => callback(err, cleanUser(results[0]), fields)
    )
 
}

User.findById = (id, callback) => {
    connection.query(
        `SELECT * FROM user WHERE id = ?`,
        [id],
        (err, results, fields) => callback(err, cleanUser(results[0]), fields)
    )
 
}

module.exports = User;