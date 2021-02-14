var express = require("express");
const deezerAPI = express.Router();
const axios = require("axios");

// Home page route.
deezerAPI.route("/getCharts").get((req, res) => {
  const path = "https://api.deezer.com/chart";
  axios(path)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.send("errr!!!");
    });
});

module.exports = deezerAPI;
