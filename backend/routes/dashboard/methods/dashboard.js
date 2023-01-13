var db = require("../../../database/connection");
var checker = require("../../../methods/checker/index");
var format = require("../../../methods/format/index");

exports.admin = (req) => {
  return new Promise((resolve, reject) => {
    if (req.user_uid != null) {
      checker.check.Check_Admin(req).then((result) => {
        if (result.row != null) {
          db.serialize(() => {
            const stmt = db.prepare(
              "SELECT COUNT(user_name) as employeeCount from user "
            );
            stmt.get((err, row) => {
              if (err) {
                reject(err);
              }
              const employee = row.employeeCount;
              const stmt = db.prepare(
                "SELECT COUNT(request_id) as leavesCount from request"
              );
              stmt.get((err, row) => {
                if (err) {
                  reject(err);
                }
                const leaves = row.leavesCount;
                const stmt = db.prepare(
                  "SELECT COUNT(request_status) as approved from request where request_status = 1"
                );
                stmt.get((err, row) => {
                  if (err) {
                    reject(err);
                  }
                  const approved = row.approved;
                  const stmt = db.prepare(
                    "SELECT COUNT(request_status) as pending from request where request_status = 0"
                  );
                  stmt.get((err, row) => {
                    if (err) {
                      reject(err);
                    }
                    const pending = row.pending;
                    const stmt = db.prepare(
                      "SELECT COUNT(request_status) as declined from request where request_status=2"
                    );
                    stmt.get((err, row) => {
                      if (err) {
                        reject(err);
                      }
                      const declined = row.declined;
                      const data = {
                        employee,
                        leaves,
                        approved,
                        pending,
                        declined,
                      };
                      resolve(
                        format.data.Response(
                          "success",
                          { message: "", data },
                          200
                        )
                      );
                    });
                  });
                });
              });
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
exports.user = (req) => {
  return new Promise((resolve, reject) => {
    if (req.user_uid != null) {
      checker.check.Check_User(req).then((result) => {
        if (result.row != null) {
          db.serialize(() => {
            const stmt = db.prepare(
              "SELECT COUNT(request_leaveDuration) as leaveDuration from request where ? "
            );
            stmt.get([req.user_uid], (err, row) => {
              if (err) {
                reject(err);
              }
              console.log("i am here");
              const leaveDuration = row.leaveDuration;
              const data = { leaveDuration };
              resolve(
                format.data.Response(
                  "success",
                  {
                    message: "data gathered successfully",
                    data,
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
    } else {
      resolve(
        format.data.Response("failed", "missing/not Acceptable crednetial", 406)
      );
    }
  });
};
