const showDashboardPage = (req, res) => {
	res.render('backoffice/list_backoffice', { title: 'Which series would you like to edit this time?', user: req.user, manga: req.manga });
};

const showmangaAddPage = (req, res) => {
	res.render('backoffice/list_create', { title: 'Add a new manga to your list', user: req.user });
};

const showmangaEditPage = (req, res) => {
	res.render('backoffice/list_edit', { title: 'Edit changes to a manga in your list', user: req.user, mangas: req.mangas });
};

module.exports = { showDashboardPage, showmangaAddPage, showmangaEditPage };