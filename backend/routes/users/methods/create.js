var db = require("../../../database/connection");
var format = require("../../../methods/format/index");

exports.createUser = (req) => {
  return new Promise((resolve, reject) => {
    if (
      req.user_email != null &&
      req.user_name != null &&
      req.user_password != null &&
      req.user_admin != null
    ) {
      db.serialize(() => {
        const check = db.prepare(
          "SELECT user_email from user where user_email = ?"
        );
        check.all([req.user_email], (err, rows) => {
          if (err) {
            reject(err);
          }
          if (rows.length == 0) {
            const stmt = db.prepare(
              "INSERT INTO user ( user_email, user_name, user_password, user_admin ) VALUES (?,?,?,?)"
            );
            stmt.run(
              [
                req.user_email,
                req.user_name,
                req.user_password,
                req.user_admin,
              ],
              (err) => {
                if (err) {
                  const data = {
                    err,
                    status: 400,
                  };
                  reject(format.data.Response("failed", err, 400));
                }
                resolve(format.data.Response("success", "Create user Success"));
              }
            );
            stmt.finalize();
          } else {
            resolve(format.data.Response("failed", "Existing account", 406));
          }
        });
      });
    } else {
      resolve(format.data.Response("failed", "Bad request", 400));
    }
  });
};
