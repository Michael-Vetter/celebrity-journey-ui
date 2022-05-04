import React from "react";
import Image from "react-bootstrap/Image";

const ImageHeader2 = (props) => {
  console.log("ImageHeader2 props", props);
  return (
    <div>
      (Image from{" "}
      <a
        href="https://www.instagram.com/dualipaloversbr/"
        rel="noreferrer"
        target="_blank"
      >
        @{props.record.account}
      </a>{" "}
      Instagram account)
      <div className="imageHeader">
        <Image
          className="imageHeader"
          src={"https://www.celebrity-journey.com/img/" + props.record.fileName}
          alt={props.record.fileName}
        ></Image>
      </div>
    </div>
  );
};

export default ImageHeader2;
