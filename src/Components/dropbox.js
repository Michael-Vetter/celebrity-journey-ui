import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
//import { uploadToS3 } from "./upload-file";

//https://blog.logrocket.com/create-drag-and-drop-component-react-dropzone/

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
function DropBox({ onDrop, myDate }) {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop,
    noClick: true,
    noKeyboard: true,
  });
  //const [imageSent, setImageSent] = useState([]);
  const lists = acceptedFiles.map((list) => (
    <li key={list.path}>
      {list.path} - {list.size} bytes
    </li>
  ));

  return (
    <>
      {" "}
      <section className="dropbox1">
        <Container
          className="dropbox1"
          {...getRootProps({
            isDragAccept,
            isFocused,
            isDragReject,
            refKey: "myTestTitle",
          })}
          title="myTitle"
          id="myId"
          name="myName"
        >
          {/* <input
            {...getInputProps({
              onChange: handleFile,
            })}
          /> */}
          <p>Drag images here</p>
        </Container>
      </section>
    </>
  );
}
export default DropBox;
