import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

const sourceUrl = [
  {
    name: "youtube",
    url: "https://www.youtube.com/watch?v=",
    description: "Youtube",
  },
];

const ExtraSpace = styled.div`
  height: 30px;
`;

const RecordVideo = (props) => {
  const urlItem = sourceUrl.filter((_) => _.name === props.recordVideo.source);

  // console.log("props.videoData", props.videoData);
  //console.log("props.recordVideo", props.recordVideo);

  const videos = props.videoData.filter(
    (video) => video.id === props.recordVideo.videoId
  );
  let DateOfEvent = "";
  if (props.record.dateEvent) {
    DateOfEvent = props.record.dateEvent;
  } else {
    DateOfEvent = "Unknown";
  }
  //console.log("videos", videos);
  if (videos && videos[0]) {
    const video = videos[0];
    //console.log("video", video);
    return (
      <div>
        <a href={urlItem[0].url + video.id} rel="noreferrer" target="_blank">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.localized.title}
          />
        </a>
        <div>
          <span className="fw-bold">
            {props.videoIndex + 1}) Date of Event:{" "}
          </span>
          {DateOfEvent}
        </div>
        <div>
          <span className="fw-bold">Upload Date: </span>
          <Moment format="YYYY-MM-DD">{video.snippet.publishedAt}</Moment>
        </div>
        <div className="fw-bold">{video.snippet.localized.title}</div>

        <div>
          <span className="fw-bold">Category: </span>
          {props.record.categories[0].category}
        </div>
        <div>{parseInt(video.statistics.viewCount).toLocaleString()} views</div>
        <ExtraSpace />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RecordVideo;
