import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import PostVideo from "./postVideo";

export default function AddVideoForm(props) {
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const [songsState, setSongsState] = useState(
    new Array(props.songs.length).fill(false)
  );

  const handleClose = () => props.setShowVideoForm(false);

  const AfterUpload = function AfterUpload(message: string) {
    //console.log("AfterUpload", message);
    //handleClose();
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

    let songsList: string = "";
    //let newSongFilter = "";
    songsState.map((s, index) => {
      if (s) {
        if (songsList.length > 0) songsList += ",";
        songsList += props.songs[index].name;
      }
      return "";
    });
    //console.log("songsList", songsList);
    PostVideo(
      formDataObj.formVideoAddEventDate.toString(),
      formDataObj.formVideoAddVideoId.toString(),
      formDataObj.formVideoAddCategory.toString(),
      songsList,
      AfterUpload
    );
    e.target.reset();
    setSongsState(new Array(props.songs.length).fill(false));
  };

  const checkFnSongs = (e) => {
    const newSongsChecked = new Array(props.songs.length).fill(false);
    newSongsChecked.map((s, index) => {
      if (props.songs[index].setlist === "FN") {
        newSongsChecked[index] = true;
      }
      return "";
    });
    setSongsState(newSongsChecked);
  };

  const handleOnSongChange = (position) => {
    //console.log("handleOnSongChange", position);
    const updatedCheckedState = songsState.map((item, index) =>
      index === position ? !item : item
    );

    setSongsState(updatedCheckedState);
  };

  return (
    <>
      <div>
        <Modal
          show={props.showVideoForm}
          onHide={handleClose}
          scrollable={true}
        >
          <Modal.Header>
            <Modal.Title>Add New Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSend}>
              <Form.Group className="mb-3" controlId="formVideoAddVideoId">
                <Form.Label>Youtube video ID</Form.Label>
                <Form.Control
                  type="text"
                  name="formVideoAddVideoId"
                  placeholder="Youtube video ID"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formVideoAddEventDate">
                <Form.Label>
                  Date of the Event (leave blank if not known)
                </Form.Label>
                <Form.Control
                  type="date"
                  name="formVideoAddEventDate"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formVideoAddCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="formVideoAddCategory"
                  defaultValue={"Concert"}
                >
                  <option value="Award">Award</option>
                  <option value="Concert">Concert</option>
                  <option value="Fan Encounter">Fan Encounter</option>
                  <option value="Festival">Festival</option>
                  <option value="Interview">Interview</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                  <option value="Music Only">Music Only</option>
                  <option value="Music Video">Music Video</option>
                  <option value="Studio">Studio</option>
                </Form.Select>
              </Form.Group>
              <Row>
                <Col sm={8}>
                  <Form.Group className="mb-3" controlId="formVideoAddSongs">
                    <div className="filterContainerLg">
                      {props.songs.map(({ name }, index) => {
                        return (
                          <div key={`custom-checkbox-song-${index}`}>
                            <Form.Check
                              type="checkbox"
                              id={`custom-checkbox-song-${index}`}
                              name={"SONG:" + name}
                              label={name}
                              checked={songsState[index]}
                              onChange={() => handleOnSongChange(index)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Button variant="primary" onClick={checkFnSongs}>
                    Select All FN-Tour Songs
                  </Button>
                </Col>
              </Row>
              <Button
                id="SendButton"
                type="submit"
                variant="primary"
                disabled={!buttonEnabled}
              >
                {buttonEnabled ? "Add Video" : "Adding..."}
              </Button>{" "}
              <Button variant="primary" onClick={handleClose}>
                Cancel
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
