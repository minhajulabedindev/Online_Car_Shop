import React from "react";
import { Button, Col, Modal } from "react-bootstrap";
import "./Login.css";
// import avatar from "../../images/avatar/img_avatar2 (1).png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFirebase from "../Hooks/useFirebase";

const Login_2 = (props) => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, signInWithGoogle } = useFirebase();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);

    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <div>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container py-5 my-5">
            <div className="d-flex justify-content-center align-items-center">
              <Col md={2}></Col>
              <Col md={8}>
                <div className="login_form">
                  <div className="login_title mb-4">
                    <h3>
                      Please <span style={{ color: "red" }}>Login</span>
                    </h3>
                  </div>
                  <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>
                    <input onChange={handleOnBlur} type="email" name="email" id="email" placeholder="Enter your email" required />

                    <label htmlFor="password">
                      Password <span>*</span>
                    </label>
                    <input onChange={handleOnBlur} type="password" name="password" id="password" placeholder="Enter your password" required />

                    <div className="d-flex align-items-center justify-content-between">
                      <Button onClick={handleLoginSubmit} type="submit" className="btn_login ">
                        Login
                      </Button>
                      <span>If you are new user? please register</span>
                      <Link className="btn_register" to="/register">
                        <Button variant="text">Register</Button>
                      </Link>
                    </div>

                    <Button onClick={handleGoogleSignIn} className="btn_banner py-2 w-100 mt-4">
                      Sign In With Google
                    </Button>
                  </form>
                </div>
              </Col>
              <Col md={2}></Col>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login_2;
