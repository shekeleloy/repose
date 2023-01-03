# Table of contents
- [[#Initial setup for the said database]]
  - [[#request init]]
  - [[#user init]]
- [[#POST METHOD
  - [[##Create user]]
  - [[##user auth]]
  - [[##Create Reqeust]]
  - [[##view request]]
  - [[##update request]]

# Initial setup for the said database 
## request init
http://localhost:3000/request/init

Method: GET
Response:
```JSON
{
  "status": "Success",
  "payload": "Initial is been made",
  "date": "2023/0/3 15:07:06 GMT+0800 (Philippine Standard Time)"
}
```
## user init
http://localhost:3000/users/init
Method: GET
Response:
```JSON
{
  "status": "success",
  "payload": "user table initial success ",
  "date": "2023/0/3 15:07:06 GMT+0800 (Philippine Standard Time)"
}
```
# POST METHOD
## Create user
http://localhost:3000/users/createUser
Method: POST
Request Body
```JSON
{
  "user_email":"sample@gmail.com",
  "user_name":"test name",
  "user_password":"test password",
  "user_admin":true
}
```
Response
```JSON
{
  "status": "success",
  "payload": "Create user Success",
  "date": "2023/0/3 15:07:06 GMT+0800 (Philippine Standard Time)"
}
```
## user auth
http://localhost:3000/users/auth
Method: POST
Request Body
```JSON
{
  "user_email":"sample@gmail.com",
  "user_password":"test password"
}
```
Response Body
```JSON
{
  "status": "Success",
  "payload": {
    "token": "5cc47a0d-d44e-48d8-811f-d0ef4ab63962",
    "message": "Successfully auth/login"
  },
  "date": "2023/0/3 15:07:06 GMT+0800 (Philippine Standard Time)"
}
```
## Create Reqeust
http://localhost:3000/request/create
Method: POST
Request Body:
```JSON
{
  "user_uid":"5cc47a0d-d44e-48d8-811f-d0ef4ab63962",
  "request_file":"request for leave testing asd",
  "request_status":0
}
```
Response:
```JSON
{
  "status": "Success",
  "payload": "request has been made",
  "date": "2023/0/3 15:07:06 GMT+0800 (Philippine Standard Time)"
}
```
## view request
http://localhost:3000/request/view
Method POST
Request Body:
```JSON
{
  "user_uid":"5cc47a0d-d44e-48d8-811f-d0ef4ab63962"
}
```
Response:
```JSON
{
  "status": "success",
  "payload": {
    "message": "data is gathered",
    "data": [
      {
        "request_id": 1,
        "user_email": "sample@gmail.com",
        "user_name": "test name",
        "request_file": "request for leave",
        "request_status": 1,
        "request_created": "2022-12-29 11:13:05",
        "request_modify": "2022-12-30 07:39:18"
      },
      {
        "request_id": 2,
        "user_email": "sample@gmail.com",
        "user_name": "test name",
        "request_file": "request for leave testing",
        "request_status": 0,
        "request_created": "2022-12-29 13:38:31",
        "request_modify": null
      },
      {
        "request_id": 3,
        "user_email": "sample@gmail.com",
        "user_name": "test name",
        "request_file": "request for leave testing asd",
        "request_status": 0,
        "request_created": "2022-12-29 13:38:38",
        "request_modify": null
      },
      {
        "request_id": 4,
        "user_email": "sample@gmail.com",
        "user_name": "test name",
        "request_file": "request for leave testing asd",
        "request_status": 0,
        "request_created": "2022-12-29 13:42:37",
        "request_modify": null
      },
      {
        "request_id": 5,
        "user_email": "sample@gmail.com",
        "user_name": "test name",
        "request_file": "request for leave testing asd",
        "request_status": 0,
        "request_created": "2022-12-30 07:30:40",
        "request_modify": null
      },
      {
        "request_id": 6,
        "user_email": "sample@gmail.com",
        "user_name": "test name",
        "request_file": "request for leave testing asd",
        "request_status": 0,
        "request_created": "2022-12-30 07:36:41",
        "request_modify": null
      },
      {
        "request_id": 7,
        "user_email": "sample@gmail.com",
        "user_name": "test name",
        "request_file": "request for leave testing asd",
        "request_status": 0,
        "request_created": "2023-01-03 07:17:16",
        "request_modify": null
      }
    ]
  },
  "date": "2023/0/3 15:07:06 GMT+0800 (Philippine Standard Time)"
}
```
## update request
http://localhost:3000/request/update
Method: POST
Request Body:
```JSON
{
  "user_uid":"5cc47a0d-d44e-48d8-811f-d0ef4ab63962",
  "request_id": 1,
  "request_status":1
}
```
Response:
```JSON
{
  "status": "Success",
  "payload": "data has been update/modified",
  "date": "2023/0/3 15:07:06 GMT+0800 (Philippine Standard Time)"
}
```