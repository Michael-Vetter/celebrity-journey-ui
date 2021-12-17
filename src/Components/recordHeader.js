import React from "react";
import RecordVideo from "./recordVideo";

const RecordHeader = (props) => {
  return (
    <div>
      <RecordVideo
        key={props.record.videos[0].videoId}
        recordVideo={props.record.videos[0]}
        videoData={props.videoData}
        record={props.record}
        videoIndex={props.videoIndex}
      />
    </div>
  );
};

export default RecordHeader;
