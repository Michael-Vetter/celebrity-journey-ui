import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import RecordHeader2 from "./recordHeader2";
import ImageHeader2 from "./imageHeader2";

export default function EventItems2(props) {
  const handleClose = () => props.setShowEventModal2(false);

  function videosByEvent() {
    return (
      <div>
        <div hidden={!props.popUpLoading}>Loading...</div>
        <div hidden={props.popUpLoading}>
          <h2>Images</h2>

          <div hidden={props.popUpImgs.length > 0}>No images for this date</div>
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-6  row-cols-xl-10 p-1 m-10">
            {props.popUpImgs.map((record, index) => {
              //console.log("record", record);
              return <ImageHeader2 key={index} record={record} />;
            })}
          </div>

          <h2>Videos</h2>

          <div hidden={props.popUpVids.length > 0}>
            No videos for this date
            <h3>
              <a
                href="https://www.instagram.com/wherewasdualipa/"
                rel="noreferrer"
                target="_blank"
              >
                Have a video for this event? DM me on Instagram
              </a>
            </h3>
          </div>
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  row-cols-xl-4 p-1 m-10">
            {props.popUpVids.map((record, index) => {
              return (
                <RecordHeader2
                  className="col"
                  key={record.id}
                  record={record}
                  videoIndex={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Modal
        dialogClassName="modal-90w"
        show={props.showEventModal2}
        onHide={handleClose}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.eventDate2 + " " + props.eventTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{videosByEvent()}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}
