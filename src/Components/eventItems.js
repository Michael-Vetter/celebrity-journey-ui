import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import moment from "moment";
import RecordHeader from "./recordHeader";
import ImageHeader from "./imageHeader";

let data = require("../Data/dualipa.json");
const images = require("../Data/images.json");
const videos = require("../Data/dualipavideo.json");

export default function EventItems(props) {
  const handleClose = () => props.setShow(false);

  function videosByEvent(eventDate) {
    const eventVideos = data.filter((_) => _.dateSort === eventDate);
    const eventImages = images.filter((_) => _.date === eventDate);
    return (
      <div>
        <h2>Images</h2>
        <div hidden={eventImages.length > 0}>No images for this date</div>
        <div hidden={eventImages.length === 0}>
          (Images from{" "}
          <a
            href="https://www.instagram.com/dualipaloversbr/"
            rel="noreferrer"
            target="_blank"
          >
            @dualipaloversbr
          </a>{" "}
          Instagram account)
        </div>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-6  row-cols-xl-10 p-1 m-10">
          {eventImages.map((record, index) => {
            return <ImageHeader key={record.id} file={record.file} />;
          })}
        </div>
        <h2>Videos</h2>
        <div hidden={eventVideos.length > 0}>No videos for this date</div>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  row-cols-xl-4 p-1 m-10">
          {eventVideos.map((record, index) => {
            return (
              <RecordHeader
                className="col"
                key={record.id}
                record={record}
                videoData={videos}
                videoIndex={index}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <Modal
        dialogClassName="modal-90w"
        show={props.show}
        onHide={handleClose}
        scrollable="true"
      >
        <Modal.Header closeButton>
          <Modal.Title>{moment(props.eventDate).format("LL")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {videosByEvent(moment(props.eventDate).format("YYYY-MM-DD"))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
