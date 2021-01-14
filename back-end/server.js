const { db } = require("./config.js");
const express = require("express");
const app = express();

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

/*app.get("/:id", (req, res) => {
  connection.query(
    "SELECT candidats from we_match-dev WHERE id=?",

    [req.params.id],

    (err, results) => {
      if (err) {
        console.log(err);

        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});*/

app.listen(5050, () => {
  console.log("Server is runing !");
});
