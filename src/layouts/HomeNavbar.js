import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Container } from "semantic-ui-react";
import "../css/Navbar.css";

function HomeNavbar() {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  const handleSignOut = () => {};

  return (
    <Menu inverted size="massive">
      <Container className="container">
        <Menu.Item active={activeItem === "Home"} onClick={handleItemClick}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          active={activeItem === "Create a poll"}
          onClick={handleItemClick}
        >
          <Link to="/create">Create a poll</Link>
        </Menu.Item>
        <Menu.Item active={activeItem === "Polls"} onClick={handleItemClick}>
          <Link to="/polls">Polls</Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown
            item
            text="Beyza Göbel"
            active={activeItem === "dashboard"}
            onClick={handleItemClick}
          >
            <Dropdown.Menu>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default HomeNavbar;
