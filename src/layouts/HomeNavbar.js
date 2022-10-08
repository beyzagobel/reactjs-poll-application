import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Divider, Menu, Container } from "semantic-ui-react";
import "../css/HomeNavbar.css";

function HomeNavbar() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  const handleSignOut = () => {};

  return (
    <div className="navbar">
      <div className="ui container">
        <div class="ui inverted segment">
          <div class="ui inverted secondary menu">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
            >
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              name="createPoll"
              active={activeItem === "createPoll"}
              onClick={handleItemClick}
            >
              <Link to="/create">Create Poll</Link>
            </Menu.Item>
            <Menu.Item
              name="polls"
              active={activeItem === "polls"}
              onClick={handleItemClick}
            >
              <Link to="/polls">Polls</Link>
            </Menu.Item>
            <Menu.Menu position="right">
              <Dropdown
                className="user"
                item
                text="Beyza Göbel"
                active={activeItem === "dashboard"}
                onClick={handleItemClick}
              >
                <Dropdown.Menu>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item onClick={handleSignOut}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </div>
        </div>
      </div>
      <div className="ui divider"></div>
    </div>
  );
}

export default HomeNavbar;
