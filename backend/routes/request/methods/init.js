var format = require("../../../methods/format/index");
var db = require("../../../database/connection");

exports.reqeust = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare(
        "CREATE TABLE IF NOT EXISTS request (\n" +
          "request_id INTEGER PRIMARY KEY AUTOINCREMENT,\n" +
          "user_id INTEGER NOT NULL,\n" +
          "request_file TEXT NOT NULL , \n" +
          "request_status INTEGER NOT NULL, \n" +
          "request_LeaveType TEXT , \n" +
          "request_StartLeave DATETIME, \n" +
          "request_EndLeave DATETIME, \n" +
          "request_LeaveCountInclude INTEGER, \n" +
          "request_TotalLeaveCount INTEGER, \n" +
          "request_Remark TEXT, \n" +
          "request_SupportOfficer TEXT, \n" +
          "request_SupportOfficerRemark TEXT, \n" +
          "request_SupportingDocument BLOB, \n" +
          "request_created DATETIME NOT NULL, \n" +
          "request_modify DATETIME \n" +
          ")"
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
