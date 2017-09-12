var express = require("express"),
path = require("path"),
bodyParser = require("body-parser"),
app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/anonymous-notes/dist')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js')(app);

app.listen(8000, () => {
	console.log("listening on port 8000");
});