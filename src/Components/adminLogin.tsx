import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import PostAdminLogin from "./postAdminLogin";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

const ExtraSpace = styled.div`
  height: 100px;
`;
const ExtraSpaceSM = styled.div`
  height: 40px;
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
            <ExtraSpaceSM />
            <h5>Add An Image</h5>
            <p>
              1. To add an image, find the date on the calendar and drag and
              drop the image in the designated spot.
            </p>
            <Image
              src={"https://www.celebrity-journey.com/img/drop image.png"}
              alt="drop image"
            ></Image>
            <p>
              2. If the image is successfully uploaded, you will get a pop-up
              message. You can view the image by clicking the event.
            </p>
            <ExtraSpaceSM />
            <h5>Add An Event</h5>
            <p>
              1. If there is no Event (the date on the calendar is blank), you
              can add one. Only one event is allowed for each day. If you create
              an event on a day that already has one, the event will be replaced
              with the new one. Any existing images or videos will remain and be
              attached to the new event.
            </p>
            <p>2. To add an Event, press the Add Event button:</p>
            <Image
              src={"https://www.celebrity-journey.com/img/Add Event 1.png"}
              alt="add event button"
            ></Image>
            <p>3. Fill out the form and press Add Event:</p>
            <Image
              src={"https://www.celebrity-journey.com/img/Add Event 2.png"}
              alt="add event form"
            ></Image>
            <p>
              4. If you replace an event, include the old name in the new name.
              For example, if there is an event "FN Tour, Newark", and you have
              images for the same day at a park, then the new event can be, "FN
              Tour, Newark and walking through Central Park, NY"
            </p>
            <p>
              5. If you make a mistake, and need to delete an event, please DM
              me, as it needs to be done manually on the backend for now.
            </p>
            <ExtraSpaceSM />
            <h5>Add A Video</h5>
            <p>
              1. If you find a Youtube video that is not on my page, you can add
              it. (Only Youtube videos supported)
            </p>
            <p>2. On the All Videos tab, press the Add Video button:</p>
            <Image
              src={"https://www.celebrity-journey.com/img/add video 1.png"}
              alt="add event form"
            ></Image>
            <p>3. Fill out the form and press the Add Video button:</p>
            <Image
              src={"https://www.celebrity-journey.com/img/add video 2.png"}
              alt="add event form"
            ></Image>
            <p>4. If successfully added, you will get a pop-up message</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
