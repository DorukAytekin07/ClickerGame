import React, { useState } from 'react';
import {
  FaBars,
  FaHome,
  FaStore
} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />
    },
    {
      path: "/store",
      name: "Store",
      icon: <FaStore />
    },
  ]
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <p style={{ display: isOpen ? "block" : "none" }} className="logo">Name</p>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <Link to={item.path} key={index} className="link" activeclassname="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text"><p>{item.name}</p></div>
            </Link>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
