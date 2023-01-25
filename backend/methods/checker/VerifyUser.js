var db = require("../../database/connection");
var format = require("../format/index");

exports.Check_Admin = (req) => {
  return new Promise((resolve, reject) => {
    if (req.user_uid != null) {
      db.serialize(() => {
        const stmt = db.prepare(
          "SELECT user_admin from user where user_uid = ? and user_admin = true LIMIT 1"
        );
        stmt.get([req.user_uid], (err, row) => {
          if (err) {
            reject(err);
          }
          if (row != null) {
            resolve({ row });
          } else {
            resolve(
              format.data.Response(
                "failed",
                "token is expired or unregistered admin"
              )
            );
          }
        });
      });
    } else {
      resolve(
        format.data.Response("failed", "missing/not Acceptable crednetial", 406)
      );
    }
  });
};
exports.Check_User = (req) => {
  return new Promise((resolve, reject) => {
    if (req.user_uid != null) {
      db.serialize(() => {
        const stmt = db.prepare(
          "SELECT user_email from user where user_uid = ? LIMIT 1"
        );
        stmt.get([req.user_uid], (err, row) => {
          if (err) {
            reject(err);
          }
          if (row != null) {
            resolve({ row });
          } else {
            resolve(
              format.data.Response(
                "failed",
                "token is expired or unregistered user",
                401
              )
            );
          }
        });
      });
    } else {
      resolve(
        format.data.Response("failed", "missing/not Acceptable crednetial", 406)
      );
    }
  });
};
