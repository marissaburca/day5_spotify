import { Col, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useDispatch } from 'react-redux';
import { getNewSearchAction } from "../redux/actions";
import { useState } from "react";
import {BsFillHouseDoorFill, BsBookFill} from "react-icons/bs"


const Sidebar = () => {

  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault()
    dispatch(getNewSearchAction(searchValue));
  };


  return (
    <Col className="col-lg-3">
      <Navbar
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <Navbar.Brand>
            <img
              src={logo}
              alt="Spotify Logo"
              style={{ width: "131px", height: "40px" }}
            />
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="ps-0">
                <Nav.Link
                  className="nav-item d-flex align-items-center"
                  href="#"
                >
                  <BsFillHouseDoorFill className="fs-4"/>&nbsp; Home
                </Nav.Link>
                <Nav.Link
                  className="nav-item d-flex align-items-center"
                  href="#"
                >
                  <BsBookFill className="fs-4"/>&nbsp; Your Library
                </Nav.Link>
                <li>
                  <form className="input-group mt-3" onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={searchValue}
                      onChange={handleSearchChange}
                      
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-sm h-100"
                        type="submit"
                       
                      >
                        GO
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-column align-items-center w-100">
          <button className="btn signup-btn bg-white rounded-pill " type="button">
            Sign Up
          </button>
          <button className="btn login-btn rounded-pill text-white border" type="button">
            Login
          </button>
          <div><a href="#">Cookie Policy</a> |<a href="#"> Privacy</a></div>
        </div>
      </Navbar>
    </Col>
  );
};

export default Sidebar;
