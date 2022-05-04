import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import PostAdminLogin from "./postAdminLogin";
import { useNavigate } from "react-router-dom";

export default function AdminLogin(props) {
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const handleClose = () => goHome();
  const navigate = useNavigate();
  let userName = "";
  const goHome = function () {
    navigate("/dualipa");
  };
  const AfterUpload = function AfterUpload(message: string) {
    console.log("AfterUpload", message);
    //handleClose();
    props.setPopUpMessage(message);
    setButtonEnabled(true);
    props.setShowPopUp(true);
    if (message === "Successful login") {
      window.localStorage.setItem("adminAccount", userName);
      props.setAdminAccount(userName);
      goHome();
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    setButtonEnabled(false);
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
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
      <div>
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
      </div>
    </>
  );
}
