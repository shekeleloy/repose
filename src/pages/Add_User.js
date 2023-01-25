import React from 'react';
import axios from 'axios';
import { Baseurl } from '../API/config';
import { useState } from 'react';

import "../style/admin/add-user.css";

const AddUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [position, setPosition] = useState("");


    function handleSubmit() {
        axios
          .post(Baseurl + "/backend/routes/users/methods/create.js", {
            user_name: username,
            user_email: email,
            user_password: password,
            user_admin: position
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.payload.token);
            console.log(localStorage.getItem("token"));
          })
          .catch((err) => {
            console.log(err);
            console.log("sample err message");
          })
          .finally(() => {});
      }

    return (
        <div className="ad-user-container">
            <div className="card">
                <div className="content">
                    <h1>Add User</h1>
                    <label className="modal-open modal-label" for="modal-open">
                        <p>Create User</p>
                    </label>
                    <input type="radio" name="modal" value="open" id="modal-open" class="modal-radio" />
                    <div className="modal">
                        <label className="modal-label overlay">
                            <input type="radio" name="modal" value="close" class="modal-radio" />
                        </label>
                        <div className="content">
                            <div className="top">
                                <h2>Add User</h2>
                                <p>Fill up the following requirements</p>
                                <label className="modal-label close-btn">
                                    <input type="radio" name="modal" value="close" class="modal-radio" />
                                </label>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <label>Employee Name</label>
                                <input type="text" name="name" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Password</label>
                                <input type="password" name="pword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label>Confirm Password</label>
                                <input type="password" name="pword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label>Position</label>
                                <input type="text" name="position" placeholder="Enter Position" value={position} onChange={(e) => setPosition(e.target.value)} />

                                <div className="btn-btn">
                                    <button class="cssbuttons-io-button" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                                        <span>Add</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="crud-user">
                <table>
                    <tr className='user-info'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Position</th>
                        <th></th>

                    </tr>
                    <tr>
                        <td>Cielito Medina</td>
                        <td>cielodev@gmail.com</td>
                        <td>...</td>
                        <td>Moral Support Officer</td>
                        <td>
                            <div className="btn-1">
                                <button> Edit </button>
                                <button> Delete </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AddUser;
