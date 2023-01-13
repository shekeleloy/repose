# Table of contents
- [Table of contents](#table-of-contents)
- [Initial setup for the said database](#initial-setup-for-the-said-database)
  - [request init](#request-init)
  - [user init](#user-init)
- [POST METHOD](#post-method)
  - [Create user](#create-user)
  - [user auth](#user-auth)
  - [user update/edit](#user-updateedit)
  - [delete user](#delete-user)
  - [Create Reqeust](#create-reqeust)
  - [view request](#view-request)
  - [update request](#update-request)
- [Dashboard](#dashboard)
  - [admin](#admin)

# Initial setup for the said database 
## request init
http://localhost:3001/request/init

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
http://localhost:3001/users/init
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
http://localhost:3001/users/createUser
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
http://localhost:3001/users/auth
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

## user update/edit
http://localhost:3001/users/update
Method POST
Request Body
``` JSON
{
  "test":"test",
  "user_uid":"bbda6f2f-ffd1-4284-812c-459589001ed3",
  //optional all in bottom is optional example if you only want to edit is the user_name then just put that
  "user_name":"this is not albert",
  "user_email":"test",
  "user_password":"hehe"
}
```
response message
```JSON
{
  "status": "success",
  "payload": "changing password success",
  "date": "2023/0/13 22:45:59 GMT+0800 (Philippine Standard Time)"
}
```
## delete user
http://localhost:3001/users/delete
Method POST
request body
```JSON
{
  "user_uid":"bbda6f2f-ffd1-4284-812c-459589001ed3"
}
```
Response body
```JSON
{
  "status": "success",
  "payload": "successfuly deleted user",
  "date": "2023/0/13 23:00:47 GMT+0800 (Philippine Standard Time)"
}
```
## Create Reqeust
http://localhost:3001/request/create
Method: POST
Request Body:
```JSON
{
  "user_uid":"c7d7f7a2-1a45-425d-abe3-5e20966c6514",
  "request_file":"request for leave testing asd",
  "request_status":0,
  // optional field
  "request_EndLeave":"2023-01-07 03:51:18",
  "request_StartLeave":"2023-01-17 03:51:18",
  "request_LeaveType":"SAMPLE",
  "request_TotalLeaveCount":1,
  "request_LeaveCountInclude":10,
  // 0 = none
  // 1 = Saturday
  // 2 = Sunday
  // 3 = Holiday
  "request_Remark":"sample Remark",
  "request_SupportOfficer": "Sample Officer",
  "request_SupportOfficerRemark":"Sample Officer remark"
  // "request_SupportingDocument":"experiimental, datatype blob"
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
http://localhost:3001/request/view
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
http://localhost:3001/request/update
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
# Dashboard
## admin
http://localhost:3001/dashboard/admin
Method: POST
note that the user_uid needed to have admin privilage if not there is no authorize access 
Request Body:
```JSON
{
  "user_uid":"cafe01c8-c859-44c0-bef2-51b28feb09d0"
}
```
Response body:
```JSON
{
  "status": "success",
  "payload": {
    "message": "",
    "data": {
      "employee": 3,
      "leaves": 0,
      "approved": 0,
      "pending": 0,
      "declined": 0
    }
  },
  "date": "2023/0/13 23:00:47 GMT+0800 (Philippine Standard Time)"
}
```