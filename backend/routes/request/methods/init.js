var format = require("../../../methods/format/index");
var db = require("../../../database/connection");

exports.reqeust = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare(
        "CREATE TABLE IF NOT EXISTS request (request_id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, request_file TEXT NOT NULL ,request_status INTEGER NOT NULL, request_created DATETIME, request_modify DATETIME)"
      );
      stmt.run((err) => {
        if (err) {
          reject(err);
        }
        resolve(format.data.Response("Success", "Initial is been made"));
      });
    });
  });
};
