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
          reject(
            format.data.Response("failed", {
              err,
              message: "token is expired or unregistered user",
            })
          );
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
const Check_Admin = (req) => {
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
exports.view = (req) => {
  return new Promise((resolve, reject) => {
    if (req.user_uid != null) {
      Check_Admin(req)
        .then((result) => {
          if (result.row != null) {
            db.serialize(() => {
              const stmt = db.prepare(
                "SELECT request_id, user_email, user_name, request_file, request_status, request_created, request_modify FROM request CROSS JOIN user where user_uid = ?"
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
            });
          } else {
            resolve(result);
          }
        })
        .catch((err) => {
          console.log(err);
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
    if (
      req.request_status != null &&
      req.user_uid != null &&
      req.request_id != null
    ) {
      Check_Admin(req).then((result) => {
        if (result.row != null) {
          db.serialize(() => {
            const stmt = db.prepare(
              "UPDATE request SET request_status = ?, request_modify = CURRENT_TIMESTAMP WHERE request_id = ?"
            );
            stmt.run([req.request_status, req.request_id], (err) => {
              if (err) {
                reject(err);
              }
              resolve(
                format.data.Response("Success", "data has been update/modified")
              );
            });
          });
        } else {
          resolve(result);
        }
      });
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
