import React from 'react';
import "../style/admin/add-user.css";

const AddUser = () => {


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
                            <form>
                                <label>Employee Name</label>
                                <input type="text" name="name" placeholder="Name" />
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="Enter Email" />
                                <label>Password</label>
                                <input type="password" name="pword" placeholder="Password" />
                                <label>Confirm Password</label>
                                <input type="password" name="pword" placeholder="Password" />
                                <label>Position</label>
                                <input type="text" name="position" placeholder="Enter Position" />

                                <div className="btn-btn">
                                    <button class="cssbuttons-io-button">
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
