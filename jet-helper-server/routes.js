const config = require('./db-config.js');
const mysql = require('mysql');

config.connectionLimit = 10;
const connection = mysql.createPool(config);

/* -------------------------------------------------- */
/* ------------------- Route Handlers --------------- */
/* -------------------------------------------------- */




/* ---- New Submission ---- */
newSubmission = (req, res) => {
  const data = req.body;
  console.log(data);
  const query =`
  INSERT INTO Manuscript (authorId, title, dateUnixTime, volume, issue, keyword1, keyword2, keyword3, keyword4, keyword5, abstract, reviewStatus )
  VALUES (${data.authorId} , "${data.title}", ${data.unixtime}, 33, 2, "${data.keyword1}", "${data.keyword2}", "${data.keyword3}", "${data.keyword4}", "${data.keyword5}", "${data.abstract}", "New Submission");
  `;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else {
      res.json(results);
    }
  });
};

/* ---- New Author ---- */
newAuthor = (req, res) => {
  const data = req.body;
  console.log(data);
  const query =`
  INSERT INTO Authors (lastName, firstName, institution, position, mailing, email, number )
  VALUES ("${data.authorLast}" , "${data.authorFirst}", "${data.institution}", "${data.position}", "${data.address}", "${data.email}", "${data.telephone}");
  `;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else {
      res.json(results);
    }
  });
};

/* ---- New Reviewer ---- */
newReviewer = (req, res) => {
  const data = req.body;
  console.log(data);
  const query =`
  INSERT INTO Reviewers (lastName, firstName, institution, position, mailing, email, number )
  VALUES ("${data.lastName}" , "${data.firstName}", "${data.institution}", "${data.position}", "${data.mailing}", "${data.email}", "${data.number}");
  `;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else {
      res.json(results);
    }
  });
};

/* ---- Get Manuscript ---- */
getManuscript = (req, res) => {
  const authorId = req.params.id;
  const title = req.params.title;

  const query = `
    SELECT * FROM Manuscript WHERE authorId=${authorId} AND title="${title}" ;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
}

/* ---- Get Submissions ---- */
getAllSubmissions = (req, res) => {
  var query = `
    SELECT * FROM Manuscript;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
}

/* ---- Get New Author Id ---- */
getNewAuthorId = (req, res) => {
  const query =`
  select count(*) as id from Authors;
  `;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else {
      res.json(results)
    }
  });
};

/* ---- Get New Reviewer Id ---- */
getNewReviewerId = (req, res) => {
  const query =`
  select count(*) as id from Reviewers;
  `;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else {
      res.json(results)
    }
  });
};

/* ---- Updated Reviewer Id in Manuscript ---- */
updateManuscriptReviewer = (req, res) => {
  const data = req.body;
  console.log(data);
  const query =`
  update Manuscript set reviewer${data.reviewer}Id = ${data.reviewerId} where id = ${data.manuscriptId};
  `;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else {
      res.json(results);
    }
  });
};

/* ---- Test Post ---- */
testPost = (req, res, next) => {
  const data = req.body;
  console.log(data);
  const query =`
  INSERT INTO TestPost (lastName, firstName)
  VALUES ("${data.lastName}" , "${data.firstName}");
  `;
  connection.query(query, function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results)); 
    })
  };
/* ---- Test Last Id ---- */
lastID = (req, res) => {
  console.log("lastId called")
  const query =`
  select count(*) as id from TestPost
  `;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else {
      res.json(results)
    }
  });
};


module.exports = {
  
  newSubmission: newSubmission,
  newAuthor: newAuthor,
  newReviewer: newReviewer,

  getManuscript: getManuscript,
  getAllSubmissions: getAllSubmissions,

  getNewAuthorId:getNewAuthorId,
  getNewReviewerId: getNewReviewerId,

  updateManuscriptReviewer:updateManuscriptReviewer,

  //testing routes
  testPost:testPost,
  lastID:lastID
}