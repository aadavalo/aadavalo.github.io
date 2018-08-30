/* import express library */
const express = require('express');
const port = express();

/* serve the static files */
port.use(express.static('static_files/'));
port.use(express.static('static_files/html/'));

/* starts the server */
port.listen(3000, () => {
	console.log('Server started on http://localhost:3000/');
});
