import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import PostAdminLogin from "./postAdminLogin";
import { useNavigate } from "react-router-dom";

const ExtraSpace = styled.div`
  height: 100px;
`;

export default function AdminLogin(props) {
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const handleClose = () => goHome();
  const navigate = useNavigate();
  let userName = "";
  const goHome = function () {
    navigate("/dualipa");
  };
  const AfterUpload = function AfterUpload(message: string) {
    //console.log("AfterUpload", message);
    //handleClose();
    props.setPopUpMessage(message);
    setButtonEnabled(true);
    props.setShowPopUp(true);
    if (message === "Successful login") {
      window.sessionStorage.setItem("adminAccount", userName);
      props.setAdminAccount(userName);
      goHome();
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    setButtonEnabled(false);
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    //console.log(formDataObj);
    userName = formDataObj.formLoginUserName.toString();
    PostAdminLogin(
      formDataObj.formLoginUserName.toString(),
      formDataObj.formLoginPassword.toString(),
      AfterUpload
    );
    e.target.reset();
  };

  return (
    <>
      <Container>
        <h1>Admin Login</h1>
        <Form onSubmit={handleSend}>
          <Form.Group className="mb-3" controlId="formLoginUserName">
            <Form.Control
              type="text"
              name="formLoginUserName"
              placeholder="User Name"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Control
              type="password"
              name="formLoginPassword"
              placeholder="Password"
              required
            ></Form.Control>
          </Form.Group>
          <Button
            id="SendButton"
            type="submit"
            variant="primary"
            disabled={!buttonEnabled}
          >
            {buttonEnabled ? "Login" : "Logging On..."}
          </Button>{" "}
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Form>
        <Row>
          <Col>
            <ExtraSpace />
            <div>
              <h3>What you can do as an admin:</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
