import { Container, InputGroup, Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ handleSearch, user, onLoggedOut }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="h2 my-auto">
          MyFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav navbar>
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign up
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <NavItem>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link as={Link} to={`/users/${user.Username}`}>
                    Profile
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link onClick={onLoggedOut}>Sign out</Nav.Link>
                </NavItem>
                <NavItem>
                  <input
                    type={"search"}
                    className="form-control form-control-sm"
                    placeholder="Search movie..."
                    onChange={handleSearch}
                  />
                </NavItem>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
