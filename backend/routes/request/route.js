var express = require("express");
var router = express.Router();
var index = require("./index");

router.get("/init", function (req, res) {
  index.init
    .reqeust()
    .then((result) => {
      res.status(result.status).send(result.body);
    })
    .catch((err) => {
      res.status(err.status).send(err.body);
    });
});

router.post("/create", function (req, res) {
  index.request
    .create(req.body)
    .then((result) => {
      res.status(result.status).send(result.body);
    })
    .catch((err) => {
      res.status(err.status).send(err.body);
    });
});

router.post("/view", function (req, res) {
  index.request
    .view(req.body)
    .then((result) => {
      res.status(result.status).send(result.body);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/update", function (req, res) {});

router.post("/archive", function (req, res) {});

module.exports = router;
