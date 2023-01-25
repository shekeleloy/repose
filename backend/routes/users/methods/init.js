var db = require("../../../database/connection");
var format = require("../../../methods/format/index");

exports.userinit = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(
        "CREATE TABLE IF NOT EXISTS user (\n" +
          "user_id INTEGER PRIMARY KEY AUTOINCREMENT,\n" +
          "user_uid TEXT,\n" +
          "user_email TEXT,\n" +
          "user_name TEXT,\n" +
          "user_password TEXT,\n" +
          " user_admin boolean NOT NULL\n" +
          ");",
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
