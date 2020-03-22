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
  const query =`
  INSERT INTO Manuscript (authordId, title, dateUnixTime, volume, issue, keyword1, keyword2, keyword3, keyword4, keyword5, abstract )
  VALUES (${data.authordId} , "${data.title}", ${data.unixtime}, 33, 2, "${data.keyword1}", "${data.keyword2}", "${data.keyword3}", "${data.keyword4}", "${data.keyword5}", "${data.abstract}");
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
  const query =`
  INSERT INTO Authors (lastName, firstName, institution, position, mailing, number )
  VALUES ("${data.lastName}" , "${data.firstName}", "${data.institution}", "${data.position}", "${data.mailing}", "${data.number}");
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