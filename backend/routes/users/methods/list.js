var db = require("../../../database/connection");
var format = require("../../../methods/format/index");
var checker = require("../../../methods/checker/index");
exports.user = (req) => {
  return new Promise((resolve, reject) => {
    checker.check.Check_Admin(req).then((result) => {
      if (result.row != null) {
        db.serialize(() => {
          const stmt = db.prepare(
            "SELECT user_email, user_name, user_admin from user"
          );
          stmt.all((err, row) => {
            if (err) {
              reject(err);
            }
            resolve(
              format.data.Response(
                "succes",
                {
                  message: "something in list user testing purposes",
                  data: row,
                },
                200
              )
            );
          });
        });
      } else {
        resolve(result);
      }
    });
  });
};
