/* eslint-disable indent */
const manga = require('../models/List');

const getmangas = (req, res, next) => {
    manga.getmangas((err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.manga = results;
        next();
    });
};

const getAlphabetManga = (req, res, next) => {
    manga.getAlphabetManga((err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.manga = results;
        next();
    });
};

const getReading = (req, res, next) => {
    manga.getReading((err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.manga = results;
        next();
    });
};

const getHold = (req, res, next) => {
    manga.getHold((err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.manga = results;
        next();
    });
};

const getPlan = (req, res, next) => {
    manga.getPlan((err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.manga = results;
        next();
    });
};

const getDrop = (req, res, next) => {
    manga.getDrop((err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.manga = results;
        next();
    });
};

const getComplete = (req, res, next) => {
    manga.getComplete((err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.manga = results;
        next();
    });
};

// Backoffice: manga

const getmangasId = (req, res, next) => {
    manga.getmangasId(req.params.id, (err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.mangas = results;
        next();
    });
};

const createmangas = (req, res, next) => {
    manga.create(req.body, (err) => {
        if (err) {
            return res.render('error', { err });
        }
        res.redirect('/');
    });
};

const deletemangas = (req, res, next) => {
    manga.delete(req.body.id, (err) => {
        if (err) {
            return res.render('error', { err });
        }
        res.redirect('/');
    });
};

const editmangas = (req, res, next) => {
    manga.update(req.body, req.params.id, (err) => {
        if (err) {
            return res.render('error', { err });
        }
        res.redirect('/');
    });
};

module.exports = { getmangas, getAlphabetManga, getReading, getHold, getPlan, getDrop, getComplete, getmangasId, createmangas, deletemangas, editmangas };