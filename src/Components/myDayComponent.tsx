import React, { useCallback } from "react";
import DropBox from "./dropbox";
import { uploadToS3 } from "./upload-file";

interface DefaultEventItemProps {
  title: string;
  date: string;
  onClick;
  adminAccount: string;
  setPopUpMessage;
  setShowPopUp;
}
//
//                      setPopUpMessage={myProps.setPopUpMessage}
//                      setShowPopUp={myProps.setShowPopUp}
export default function MyDayComponent(props: DefaultEventItemProps) {
  const doUpload = async (file) => {
    const fileName: string = file.name;
    const fileType: string = file.type;
    const fileContents: File = file;
    const adminAccount: string = props.adminAccount;
    const fileDate: string = props.date;
    const source: string = "instagram";
    const setPopUpMessage = props.setPopUpMessage;
    const setShowPopUp = props.setShowPopUp;
    if (fileName && fileType && fileContents && props.adminAccount) {
      await uploadToS3({
        fileName,
        fileType,
        fileContents,
        adminAccount,
        fileDate,
        source,
        setPopUpMessage,
        setShowPopUp,
      });
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      doUpload(file);
      return file;
    });
  }, []);

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
