--@block
CREATE TABLE request (
    request_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    user_id INTEGER NOT NULL, 
    request_file TEXT NOT NULL ,
    request_status INTEGER NOT NULL, 
    request_created DATETIME, 
    request_modify DATETIME
    );
CREATE TABLE user (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_uid TEXT,user_email TEXT,
    user_name TEXT,
    user_password TEXT, 
    user_admin boolean NOT NULL
);
--@block
INSERT INTO request (
    user_id,
    request_status,
    request_created,
    request_modify
  )
VALUES (
    1,
    0,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  );
--@block
DROP TABLE request
--@block
SELECT * 
FROM user;

SELECT * 
FROM request;