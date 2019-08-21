import React from "react";
import { Navbar, Button, Intent, Alignment } from "@blueprintjs/core";
import { Link } from "react-router-dom";

export const NavComponent: React.FC<{}> = () => (
  
  <Navbar className="bp3-dark">
    <Navbar.Group>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Navbar.Heading>React Commerce</Navbar.Heading>
      </Link>
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <Link to="/cart">
        <Button text="Cart" icon="shopping-cart" intent={Intent.WARNING} />
      </Link>
      <Navbar.Divider />
      <Link to="/login">
        <Button text="login" icon="user" intent={Intent.PRIMARY} />
      </Link>
    </Navbar.Group>
  </Navbar>
);
