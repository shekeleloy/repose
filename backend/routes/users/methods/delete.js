var db = require("../../../database/connection");
var format = require("../../../methods/format/index");
var checker = require("../../../methods/checker/VerifyUser");

exports.deleteUser = (req) => {
  return new Promise((resolve, reject) => {
    checker.Check_User(req).then((result) => {
      if (result.row != null) {
        db.serialize(() => {
          const stmt = db.prepare("delete from user where user_uid = ?");
          stmt.run(req.user_uid, (err) => {
            if (err) {
              console.log(err);
              reject(format.data.Response("failed", "failed to delete", 400));
            }
            resolve(
              format.data.Response("success", "successfuly deleted user", 200)
            );
          });
        });
      } else {
        resolve(result);
      }
    });
  });
};
