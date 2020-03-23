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

module.exports = {
  newSubmission: newSubmission,
  newAuthor: newAuthor
}