import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiLogin } from "react-icons/ci";
import { MdLibraryAdd } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg "style={{ backgroundColor:"rgba(151, 233, 206, 0.078)"}}>
      <Container>
        <Navbar.Brand href="#">
          <img alt="Your Company" src="/logo.png" className="logo" />
          <b className="Listify">Listify</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className=" nav-link my-1" to="/">
              Home
            </Link>
         
            <Link className=" nav-link my-1" to="/todo">
              ToDo
            </Link>
            <Link className="nav-btn my-1 mx-1 " to="/register">
              <MdLibraryAdd />
          SignUp
            </Link>
            <Link  to="/login"className="nav-btn my-1 mx-1">
              <CiLogin />
              Login
            </Link>
            <Link className="nav-btn my-1 mx-1"  to="/">
              <ImExit />
              Logout{" "}
            </Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
