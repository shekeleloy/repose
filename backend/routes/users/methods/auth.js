var db = require("../../../database/connection");
var format = require("../../../methods/format/index");
var uuid = require("uuid");

exports.auth = (req) => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare(
        "SELECT user_email from user where user_email = ? and user_password = ? LIMIT 1"
      );
      stmt.get([req.user_email, req.user_password], (err, row) => {
        if (err) {
          reject(err);
        }
        if (row != null) {
          console.log("succes");
          const uid = uuid.v4();
          const auth_stmt = db.prepare(
            "UPDATE user SET user_uid = ? WHERE user_email = ?"
          );
          auth_stmt.run([uid, req.user_email], (err) => {
            if (err) {
              reject(err);
            }
            resolve(
              format.data.Response(
                "Success",
                {
                  token: uid,
                  message: "Successfully auth/login",
                },
                200
              )
            );
          });
        } else {
          resolve(format.data.Response("failed", "Incorrect password", 401));
        }
      });
    });
  });
};
