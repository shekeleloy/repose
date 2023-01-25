var db = require("../../../database/connection");
var format = require("../../../methods/format/index");
var checker = require("../../../methods/checker/VerifyUser");

exports.editUser = (req) => {
  return new Promise((resolve, reject) => {
    checker.Check_User(req).then((result) => {
      console.log(result);
      if (result.row != null) {
        var sqlSETstmt = "";
        var sqlSETValuestmt = [];
        if (
          req.user_uid != null &&
          (req.user_email != null ||
            req.user_name != null ||
            req.user_password != null ||
            req.user_admin != null)
        ) {
          if (req.user_email != null) {
            sqlSETstmt += "user_email = ?";
            sqlSETValuestmt.push(req.user_email);
          }
          if (req.user_name != null) {
            if (sqlSETstmt.includes("?") === true) {
              sqlSETstmt += ", ";
            }
            sqlSETstmt += "user_name = ?";
            sqlSETValuestmt.push(req.user_name);
          }
          if (req.user_password != null) {
            if (sqlSETstmt.includes("?") === true) {
              sqlSETstmt += ", ";
            }

            sqlSETstmt += "user_password = ?";
            sqlSETValuestmt.push(req.user_password);
          }
          if (req.user_admin != null) {
            if (sqlSETstmt.includes("?") === true) {
              sqlSETstmt += ", ";
            }
            sqlSETstmt += "user_admin = ?";
            sqlSETValuestmt.push(req.user_admin);
          }
          sqlSETValuestmt.push(req.user_uid);
          // console.log(sqlSETstmt);
          // console.log(sqlSETValuestmt);
          db.serialize(() => {
            const stmt = db.prepare(
              "UPDATE user SET \n" + sqlSETstmt + "\n where user_uid = ?"
            );
            stmt.run(sqlSETValuestmt, (err) => {
              reject(format.data.Response("failed", err, 400));
            });
          });
        } else {
          resolve(
            format.data.Response("failed", "lack of input request body", 400)
          );
        }
        resolve(format.data.Response("success", "changing password success"));
      } else {
        resolve(result);
      }
    });
  });
};
