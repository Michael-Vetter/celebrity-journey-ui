import axios from "axios";
import { API_BASE_URL } from "../constants";

export async function uploadToS3({
  fileName,
  fileType,
  fileContents,
  adminAccount,
  fileDate,
  source,
  setPopUpMessage,
  setShowPopUp,
}: {
  fileName: string;
  fileType: string;
  fileContents: File;
  adminAccount: string;
  fileDate: string;
  source: string;
  setPopUpMessage;
  setShowPopUp;
}) {
  //console.log("uploadToS3 fileName", fileName);
  //console.log("uploadToS3 fileType", fileType);
  //console.log("uploadToS3 fileContents", fileContents);
  //console.log("uploadToS3 adminAccount", adminAccount);
  //console.log("uploadToS3 fileDate", fileDate);
  //console.log("uploadToS3 source", source);

  //todo turn on wait; put in try-catch?
  const presignedPostUrl = await getPresignedPostUrl(
    fileName,
    fileType,
    adminAccount,
    fileDate,
    source
  );
  //console.log("presignedPostUrl", presignedPostUrl);
  fetch(presignedPostUrl.url, {
    method: "PUT",
    headers: {
      "Content-Type": fileType,
    },
    body: fileContents,
  })
    .then(() => {
      //console.log("image uploaded succ");
      //todo turn off wait
      setPopUpMessage("Image Uploaded!");
      setShowPopUp(true);
    })
    .catch((error) => {
      //console.log("error", error);
      //todo turn off wait
      setPopUpMessage("Error uploading - please try again");
      setShowPopUp(true);
    });

  return presignedPostUrl.filePath;
}

type PresignedPostUrlResponse = {
  url: string;
  fields: {
    key: string;
    acl: string;
    bucket: string;
  };
  filePath: string;
};

const GET_PRESIGNED_URL_API_PATH = "api/uploadurl";

async function getPresignedPostUrl(
  fileName: string,
  fileType: string,
  adminAccount: string,
  fileDate: string,
  source: string
) {
  const { data: presignedPostUrl } = await axios.get<PresignedPostUrlResponse>(
    `${API_BASE_URL}/${GET_PRESIGNED_URL_API_PATH}/${fileName}?fileType=${fileType}&fileDate=${fileDate}&source=${source}&account=${adminAccount}&comment=`
  );

  return presignedPostUrl;
}
