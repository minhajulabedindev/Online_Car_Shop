import React from "react";
import { Button, Nav } from "react-bootstrap";
import Login_2 from "./Login_2";

const Login = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      {/* <Nav.Link className=" text-white " onClick={() => setModalShow(true)}>
        Login
      </Nav.Link>

      <Login_2 show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
};

export default Login;
