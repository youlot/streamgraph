
const path = require('path');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.sendFile("/home/rhz/Document/work/streamgraph/basic_streamgraph_v4/index.html");
});

app.use("/public", express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
	console.log("app listen on port 3000");
});
