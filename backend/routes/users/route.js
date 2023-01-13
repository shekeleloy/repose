var express = require("express");
var router = express.Router();
var user = require("./index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/init", function (req, res) {
  user.init.userinit().then((result) => {
    res.status(result.status).send(result.body);
  });
});

router.post("/auth", function (req, res) {
  user.auth.auth(req.body).then((result) => {
    res.status(result.status).send(result.body);
  });
});

router.post("/update", function (req, res) {
  user.edit.editUser(req.body).then((result) => {
    res.status(result.status).send(result.body);
  });
});
router.post("/delete", function (req, res) {
  user.delete.deleteUser(req.body).then((result) => {
    res.status(result.status).send(result.body);
  });
});
router.post("/createUser", function (req, res) {
  user.create
    .createUser(req.body)
    .then((result) => {
      res.status(result.status).send(result.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(err.status).send(err.body);
    });
});

module.exports = router;
