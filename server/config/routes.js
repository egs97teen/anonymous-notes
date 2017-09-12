var notes = require('../controllers/notes.js');

module.exports = (app) => {
	app.get('/api/notes', notes.index);
	app.post('/api/notes/add', notes.create);

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./anonymous-notes/dist/index.html"))
	});
}