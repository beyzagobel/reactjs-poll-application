import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function LoginNavbar() {
  return (
    <div>
      <Menu inverted size="massive">
        <Container className="container">
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/signup">Create a poll</Link>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
