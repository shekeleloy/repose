var express = require("express");
var router = express.Router();
var index = require("./index");
var format = require("../../methods/format/index");

router.post("/admin", function (req, res) {
  index.dashboard
    .admin(req.body)
    .then((result) => {
      res.status(result.status).send(result.body);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .send(format.data.Response("failed", "some error things", 400).body);
    });
});
router.post("/user", function (req, res) {
  index.dashboard
    .user(req.body)
    .then((result) => {
      res.status(result.status).send(result.body);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .send(format.data.Response("failed", "some error things", 400).body);
    });
});

module.exports = router;
