import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <SearchBox />
            <Nav className="mr-auto">
              <Link to="/cart">
                <Nav>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav>
              </Link>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.username || userInfo.name}
                  id="username"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login">
                  <Nav>
                    <i className="fas fa-user"></i>Login
                  </Nav>
                </Link>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenue">
                  <NavDropdown.Item as={Link} to="/admin/userlist">
                    Users
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/productlist">
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/orderlist">
                    Orders
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
