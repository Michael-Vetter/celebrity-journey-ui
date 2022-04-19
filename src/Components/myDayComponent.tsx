import React, { useCallback } from "react";
import DropBox from "./dropbox";
import { uploadToS3 } from "./upload-file";

interface DefaultEventItemProps {
  title: string;
  date: string;
  onClick;
  adminAccount: string;
}

export default function MyDayComponent(props: DefaultEventItemProps) {
  const doUpload = async (file) => {
    const fileName: string = file.name;
    const fileType: string = file.type;
    const fileContents: File = file;
    const adminAccount: string = props.adminAccount;
    const fileDate: string = props.date;
    const source: string = "instagram";
    if (fileName && fileType && fileContents && props.adminAccount) {
      console.log("GotHere");
      const filePath = await uploadToS3({
        fileName,
        fileType,
        fileContents,
        adminAccount,
        fileDate,
        source,
      });
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log("MyDayComponent onDrop acceptedFiles", acceptedFiles);
    console.log("MyDayComponent onDrop date", props.date);

    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      //reader.onload = function (e) {
      //console.log("reader onload", JSON.stringify(e.target));
      // setImages((prevState) => [
      //   ...prevState,
      //   { id: index, src: e.target.result },
      // ]);
      //};
      reader.readAsDataURL(file);
      doUpload(file);
      //not this one  uploadToS3(file.name, file.type, file);
      return file;
    });
  }, []);

  //console.log("mydate", props.date);
  return (
    <>
      <div>
        <div className="mdc-event" onClick={props.onClick}>
          <div className="mdc-event-content" title={props.date}>
            {props.title}
          </div>
        </div>
        <div hidden={props.adminAccount.length === 0}>
          <DropBox onDrop={onDrop} myDate={props.date}></DropBox>
        </div>
      </div>
    </>
  );
}
