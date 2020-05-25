
const showmangaPage = (req, res) => {
	res.render('website/list', { title: "My Manga/Light Novel List", manga: req.manga });
};

const showPlanPage = (req, res) => {
	res.render('website/plan', { title: "My Manga/Light Novel List - Manga I Plan to Read", manga: req.manga });
};

const showHoldPage = (req, res) => {
	res.render('website/hold', { title: "My Manga/Light Novel List - On-Hold Manga", manga: req.manga });
};

const showDropPage = (req, res) => {
	res.render('website/drop', { title: "My Manga/Light Novel List - Dropped Manga", manga: req.manga });
};

const showCompletePage = (req, res) => {
	res.render('website/complete', { title: "My Manga/Light Novel List - Manga I Read from Beginning to End", manga: req.manga });
};

const showAllPage = (req, res) => {
	res.render('website/all', { title: "My Manga/Light Novel List - All Manga", manga: req.manga });
};

module.exports = { showmangaPage, showPlanPage, showHoldPage, showDropPage, showCompletePage, showAllPage };