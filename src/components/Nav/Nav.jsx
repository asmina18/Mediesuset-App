import { useState } from "react";
import { Navbar, Nav, Container, Button, Form, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/images/Logo.png";
export const NavigationBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = () => setSearchOpen(!searchOpen);

  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>

        <div className="d-flex align-items-center">
          <img src={logo} alt="MedieSuset Logo" className="me-3" style={{ height: "50px" }} />
          <h4 className="mb-0 text-muted" style={{ fontStyle: "italic" }}>4 - 7, juli 2022</h4>
        </div>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">

          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" className="text-uppercase fw-bold mx-2">
              Forside
            </Nav.Link>
            <nav>
            <NavDropdown title="Events" id="events-dropdown" className="fw-bold mx-2">
              <NavDropdown.Item as={NavLink} to="/line-up">
                Line-Up
              </NavDropdown.Item>
            </NavDropdown>
        </nav>
            <Nav.Link as={NavLink} to="/camps" className="text-uppercase fw-bold mx-2">
              Camps
            </Nav.Link>
            <Nav.Link as={NavLink} to="/billetter" className="text-uppercase fw-bold mx-2">
              Billetter
            </Nav.Link>
            <Nav.Link as={NavLink} to="/info" className="text-uppercase fw-bold mx-2">
              Praktisk Info
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="text-uppercase fw-bold mx-2">
              Login
            </Nav.Link>
          </Nav>


          <div className="d-flex align-items-center">
            {searchOpen && (
              <Form className="me-2">
                <Form.Control
                  type="text"
                  placeholder="Søg..."
                  className="form-control"
                  style={{ width: "200px" }}
                />
              </Form>
            )}

            <Button
              variant="link"
              className="text-dark p-0"
              onClick={handleSearchToggle}
            >
              <FiSearch size={20} />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
