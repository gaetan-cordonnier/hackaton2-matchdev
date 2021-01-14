const express = require("express");
const Connection = require("mysql2/typings/mysql/lib/Connection");
const app = express();
const { db } = require("./config");

app.use(express.json());

const port = 5050;

app.listen(5050, () => {
  console.log("Server is runing !");
});

app.get("/", (req, res, next) => {
  console.log("Home Page");
  res.send("Welcome to Match♡Dev!");
  next();
});

app.get("/api/user/:prenom", (req, res) => {
  Connection.query(
    "SELECT * from candidats WHERE prenom=?",
    [req.params.prenom],
    (err, results) => {
      if (err) {
        console.log(err);

        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.post("/api/user", (req, res) => {
  const {
    prenom,
    email,
    password,
    technos,
    typeContrat,
    codePostal,
    anneesDeCode,
    salaireVise,
  } = req.body;
  db.query(
    "INSERT INTO candidats(prenom, nom, email, password, technos, technoVisee,typeContrat, anneesDeCode, salaireVise, codePostal) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      prenom,
      "",
      email,
      password,
      technos,
      "",
      typeContrat,
      codePostal,
      anneesDeCode,
      salaireVise,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error saving a new user");
      } else {
        res.status(200).send("New user saved!");
      }
    }
  );
});
