var format = require("../../../methods/format/index");
var db = require("../../../database/connection");

exports.create = (req) => {
  return new Promise((resolve, reject) => {
    if (
      req.user_uid != null &&
      req.request_status != null &&
      req.request_file != null
    ) {
      const user_id = "(SELECT user_id from user where user_uid = ?)";
      const stmt = db.prepare(
        "INSERT INTO request (user_id,request_status,request_file, request_created)VALUES (" +
          user_id +
          ",?,?,CURRENT_TIMESTAMP);"
      );
      stmt.run([req.user_uid, req.request_status, req.request_file], (err) => {
        if (err) {
          reject(format.data.Response("failed", err));
        }
        resolve(format.data.Response("Success", "request has been made", 200));
      });
    } else {
      resolve(
        format.data.Response("failed", "missing/not Acceptable crednetial", 406)
      );
    }
  });
};
exports.view = (req) => {
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
            const stmt = db.prepare(
              "SELECT user_email, user_name, request_file, request_status, request_created, request_modify FROM request CROSS JOIN user where user_uid = ?"
            );
            stmt.all([req.user_uid], (err, rows) => {
              if (err) {
                reject(err);
              }
              if (rows.length > 0) {
                resolve(
                  format.data.Response("success", {
                    message: "data is gathered",
                    data: rows,
                  })
                );
              }
            });
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
exports.update = (req) => {
  return new Promise((resolve, reject) => {
    if (req.request_status != null) {
      const stmt = db.prepare("");
    } else {
      resolve(
        format.data.Response("failed", "missing/not Acceptable crednetial", 406)
      );
    }
  });
};
exports.archive = () => {
  return new Promise((resolve, reject) => {});
};
