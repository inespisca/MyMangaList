const express = require('express');
const router = express.Router();
const { authorize } = require('../controllers/auth-controller');
const {
	showDashboardPage,
	showmangaAddPage,
	showmangaEditPage,
} = require('../controllers/page-backoffice-controller');

const {
	getAlphabetManga,
	getmangasId,
	createmangas,
	deletemangas,
	editmangas
} = require('../controllers/list-controller');


router.get('/dashboard', authorize, getAlphabetManga, showDashboardPage);

router.get('/add', authorize, showmangaAddPage);

router.post('/add', authorize, createmangas);

router.get('/:id', authorize, getmangasId, showmangaEditPage);

router.post('/delete', authorize, deletemangas);

router.post('/:id', authorize, editmangas);

module.exports = router;