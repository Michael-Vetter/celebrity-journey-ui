import React from "react";
import Image from "react-bootstrap/Image";

const ImageHeader2 = (props) => {
  console.log("ImageHeader2 props", props);
  return (
    <div>
      <div className="imageHeader">
        <Image
          className="imageHeader"
          src={"https://www.celebrity-journey.com/img/" + props.file}
          alt={props.file}
        ></Image>
      </div>
    </div>
  );
};

export default ImageHeader2;
