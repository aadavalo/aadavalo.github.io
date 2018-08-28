/* import express library */
const express = require('express');
const port = express();

/* serve the static files */
port.use(express.static('static_files/'));
port.use(express.static('static_files/html/')); /* from what i think i know we don't need this --> i think i do actually */

/* starts the server */
port.listen(3000, () => {
	console.log('Server started on http://localhost:3000/');
});
