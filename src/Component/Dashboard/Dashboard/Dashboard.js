import React from "react";
import { faSignOutAlt, faUser, faCartPlus, faThLarge, faEdit, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import useAuth from "../../Hooks/useAuth";


const Dashboard = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="  bg-light nav-flex d-flex">
      <div>
        <Navbar className="nav_bar" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="me-auto my-2 my-lg-0" style={{ maxHeight: "100%" }} navbarScroll>
                <div className=" text-start justify-content-center">
                  <div className=" py-5 mt-4">
                    <div className="dashboard_items">
                      <NavLink to="/dashboard" className="btn_banner">
                        <FontAwesomeIcon className="dash_icon" icon={faThLarge} />
                        Dashboard
                      </NavLink>
                    </div>

                    <div className="dashboard_items">
                      <NavLink to="/dashboard/makeAdmin" className="btn_banner">
                        <FontAwesomeIcon className="dash_icon" icon={faUserShield} />
                        Make Admin
                      </NavLink>
                    </div>

                    <div className="dashboard_items">
                      <NavLink to="/dashboard/addNewItem" className="btn_banner">
                        <FontAwesomeIcon className="dash_icon" icon={faCartPlus} />
                        Add New Product
                      </NavLink>
                    </div>

                    <div className="dashboard_items">
                      <NavLink to="/dashboard/addBlogs" className="btn_banner">
                        <FontAwesomeIcon className="dash_icon" icon={faEdit} />
                        Write New Blog
                      </NavLink>
                    </div>

                    <div className="dashboard_items">
                      <NavLink to="/dashboard/addFeatured" className="btn_banner">
                        <FontAwesomeIcon className="dash_icon" icon={faCartPlus} />
                        Featured Products
                      </NavLink>
                    </div>

                    <div className="dashboard_items">
                      <NavLink to="/dashboard/addReview" className="btn_banner">
                        <FontAwesomeIcon className="dash_icon" icon={faEdit} />
                        Add Review
                      </NavLink>
                    </div>

                    <div className="user_info ">
                      <div className="user_name">
                        <FontAwesomeIcon className="dash_icon" icon={faUser} />
                        <span>{user.displayName && user.displayName}</span>
                      </div>

                      <div className="user_logout">
                        <NavLink onClick={logOut} className="logout_btn" to="/home">
                          <FontAwesomeIcon className="dash_icon" icon={faSignOutAlt} />
                          Log Out
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="w-100 hight">
        {/* dashboard all routes content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
