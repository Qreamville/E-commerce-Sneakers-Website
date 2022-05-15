import React from "react";
import Offcanvas from "./Offcanvas";
import "./header.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import { Badge, Container, Form } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const { itemCount } = useGlobalContext();

  return (
    <header className="shadow-sm">
      <div className="header">
        <Offcanvas />
        <div className="header-title">
          <h2>
            <Link to="/">Sneakers</Link>
          </h2>
        </div>
        <div className="header-action">
          <div className="cart">
            <Link to="/cart">
              <BsCart size={25} />
            </Link>
            <Badge pill bg="warning">
              {itemCount}
            </Badge>
          </div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <AiOutlineUser size={25} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="X">Log In / Sign In</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Container className="search-box">
        <Form.Control type="search" placeholder="Search..." />
        <button type="button" className="btn-search">
          Search
        </button>
      </Container>
    </header>
  );
};

export default Header;
