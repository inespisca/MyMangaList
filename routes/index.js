const express = require('express');
const router = express.Router();
const { 
    showmangaPage, 
    showPlanPage, 
    showHoldPage, 
    showDropPage, 
    showCompletePage, 
    showAllPage
} = require('../controllers/page-controller');
const { 
    getReading, 
    getPlan, 
    getHold, 
    getDrop, 
    getComplete, 
    getmangas 
} = require('../controllers/list-controller');

router.get('/', getReading, showmangaPage);
router.get('/plan', getPlan, showPlanPage);
router.get('/hold', getHold, showHoldPage);
router.get('/drop', getDrop, showDropPage);
router.get('/complete', getComplete, showCompletePage);
router.get('/all', getmangas, showAllPage);

module.exports = router;
