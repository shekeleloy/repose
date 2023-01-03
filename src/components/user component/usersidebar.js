import React from 'react';
import { FaBars } from 'react-icons/fa';
import {BiLogOut} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const UserSidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
        },
        {
            path: "/applyleave",
            name: "Apply Leave",
        },
        {
            path: "/calendar",
            name: "Calendar",
        },
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "112px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                      
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div style={{ display: isOpen ? "block" : "none" }} className="logout">
                <BiLogOut />
            </div>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default UserSidebar;
