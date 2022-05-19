import RecordVideo2 from "./recordVideo2";

const RecordHeader2 = (props) => {
  return (
    <div>
      <RecordVideo2
        key={props.record.id}
        record={props.record}
        videoIndex={props.videoIndex}
      />
    </div>
  );
};

export default RecordHeader2;
