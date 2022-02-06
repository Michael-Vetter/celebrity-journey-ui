import React from "react";
import Image from "react-bootstrap/Image";

const ImageHeader = (props) => {
  return (
    <div>
      <div className="imageHeader">
        <Image
          className="imageHeader"
          src={require("../img/" + props.file).default}
          alt={props.description}
        ></Image>
      </div>
    </div>
  );
};

export default ImageHeader;
