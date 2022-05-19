import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import Logger from "./logger";

const ExtraSpace = styled.div`
  height: 30px;
`;

const RecordVideo2 = (props) => {
  const video = props.record;
  //   const videos = props.videoData.filter(
  //     (video) => video.id === props.recordVideo.videoId
  //   );
  let DateOfEvent = "";
  if (props.record.dateOfEvent) {
    DateOfEvent = props.record.dateOfEvent;
  } else {
    DateOfEvent = "Unknown";
  }

  const openVideoLink = (url, logData) => {
    Logger(logData);
    window.open(url, "_blank");
  };

  return (
    <div>
      <div>
        <a
          onClick={() =>
            openVideoLink(
              "https://www.youtube.com/watch?v=" + video.id,
              video.snippet.title + " (" + video.id + ")"
            )
          }
          href="#!"
        >
          <img
            className="img-fluid"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </a>
      </div>
      <div>
        <span className="fw-bold">{props.videoIndex + 1}) Date of Event: </span>
        {DateOfEvent}
      </div>
      <div>
        <span className="fw-bold">Upload Date: </span>
        <Moment format="YYYY-MM-DD">{video.snippet.publishedAt}</Moment>
      </div>
      <div className="fw-bold">{video.snippet.title}</div>

      {/* <div>
        <span className="fw-bold">Category: </span>
        {props.record.categories[0].category}
      </div> */}
      <div>{parseInt(video.statistics.viewCount).toLocaleString()} views</div>
      <ExtraSpace />
    </div>
  );
  //   } else {
  //     return <div></div>;
  //   }
};

export default RecordVideo2;
