var db = require("../../../database/connection");
var format = require("../../../methods/format/index");

exports.userinit = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(
        "CREATE TABLE IF NOT EXISTS user (user_id INTEGER PRIMARY KEY AUTOINCREMENT,user_uid TEXT,user_email TEXT,user_name TEXT,user_password TEXT, user_admin boolean NOT NULL);",
        (err) => {
          if (err) reject(err);
          resolve(
            format.data.Response("success", "user table initial success ")
          );
        }
      );
    });
  });
};
