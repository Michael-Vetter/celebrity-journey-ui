import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import PutEvent from "./putEvent";

export default function AddEventForm(props) {
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const handleClose = () => props.setShowEventForm(false);

  const AfterUpload = function AfterUpload(message: string) {
    console.log("AfterUpload", message);
    handleClose();
    props.setPopUpMessage(message);
    setButtonEnabled(true);
    props.setShowPopUp(true);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setButtonEnabled(false);
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    //console.log(formDataObj);
    PutEvent(
      formDataObj.formEventAddName.toString(),
      formDataObj.formEventAddDate.toString(),
      AfterUpload
    );
  };

  return (
    <>
      <div>
        <Modal
          show={props.showEventForm}
          onHide={handleClose}
          scrollable={true}
        >
          <Modal.Header>
            <Modal.Title>Add New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSend}>
              <Form.Group className="mb-3" controlId="formEventAddName">
                <Form.Label>Name of the Event</Form.Label>
                <Form.Control
                  type="text"
                  name="formEventAddName"
                  placeholder="For Example: Prudential Center, Newark NJ"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEventAddDate">
                <Form.Label>Date of the Event</Form.Label>
                <Form.Control
                  type="date"
                  name="formEventAddDate"
                ></Form.Control>
              </Form.Group>
              <Button
                id="SendButton"
                className="m-2"
                type="submit"
                variant="primary"
                disabled={!buttonEnabled}
              >
                {buttonEnabled ? "Add Event" : "Adding..."}
              </Button>
              <Button className="m-2" variant="primary" onClick={handleClose}>
                Cancel
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
