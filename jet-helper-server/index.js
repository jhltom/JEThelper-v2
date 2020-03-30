const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes.js");

const PORT = 8081;
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/newsubmission', routes.newSubmission);
app.post('/newauthor', routes.newAuthor);
app.post('/newreviewer', routes.newReviewer);


app.get('/getmanuscript/:id/:title', routes.getManuscript);
app.get('/getallsubmissions', routes.getAllSubmissions);
app.get('/newauthorid', routes.getNewAuthorId);
app.get('/newreviewerId', routes.getNewReviewerId);


//testing
app.get('/lastid', routes.lastID);
app.post('/testPost', routes.testPost);



app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`);
});