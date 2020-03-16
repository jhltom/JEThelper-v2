const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8081;
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`);
});