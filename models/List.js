/* eslint-disable quotes */

const connection = require('../db/config');

const manga = {};

manga.getmangas = (callback) => {
	connection.query(`SELECT * FROM list ORDER BY status DESC, series ASC`, (err, results) => {
		callback(err, results);
	});
};

manga.getAlphabetManga = (callback) => {
	connection.query(`SELECT * FROM list ORDER BY series ASC`, (err, results) => {
		callback(err, results);
	});
};

// get by status

manga.getReading = (callback) => {
	connection.query(`SELECT list.series, list.imgurl, list.baka, list.mal, list.readch, list.totalch, list.readvol, list.totalvol FROM list WHERE status like 'reading' ORDER BY series ASC`, (err, results) => {
		callback(err, results);
	});
};

manga.getHold = (callback) => {
	connection.query(`SELECT list.series, list.imgurl, list.baka, list.mal, list.readch, list.totalch, list.readvol, list.totalvol FROM list WHERE status like 'on%' ORDER BY series ASC`, (err, results) => {
		callback(err, results);
	});
};

manga.getPlan = (callback) => {
	connection.query(`SELECT list.series, list.imgurl, list.baka, list.mal, list.readch, list.totalch, list.readvol, list.totalvol FROM list WHERE status like 'plan%' ORDER BY series ASC`, (err, results) => {
		callback(err, results);
	});
};

manga.getDrop = (callback) => {
	connection.query(`SELECT list.series, list.imgurl, list.baka, list.mal, list.readch, list.totalch, list.readvol, list.totalvol FROM list WHERE status like 'drop%' ORDER BY series ASC`, (err, results) => {
		callback(err, results);
	});
};

manga.getComplete = (callback) => {
	connection.query(`SELECT list.series, list.imgurl, list.baka, list.mal, list.readch, list.totalch, list.readvol, list.totalvol FROM list WHERE status like 'complete%' ORDER BY series ASC`, (err, results) => {
		callback(err, results);
	});
};

// end of get by status

manga.getmangasId = (id, callback) => {
	connection.query(`SELECT * FROM list WHERE id=?`, id, (err, results, fields) => {
		callback(err, results[0], fields);
	});
};

manga.create = (mangaInfo, callback) => {
	connection.query(
		'INSERT INTO list (series, imgurl, baka, mal, readch, totalch, readvol, totalvol, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
		[mangaInfo.series, mangaInfo.imgurl, mangaInfo.baka, mangaInfo.mal, mangaInfo.readch, mangaInfo.totalch, mangaInfo.readvol, mangaInfo.totalvol, mangaInfo.status],
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

manga.delete = (id, callback) => {
	connection.query(
		'DELETE FROM list WHERE id=?',
		id,
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

manga.update = (mangaInfo, id, callback) => {
	connection.query(
		'UPDATE list SET ? WHERE id=?',
		[mangaInfo, id],
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

module.exports = manga;