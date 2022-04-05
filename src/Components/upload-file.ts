import axios from "axios";
import { API_BASE_URL } from "../constants";

export async function uploadToS3({
  fileName,
  fileType,
  fileContents,
}: {
  fileName: string;
  fileType: string;
  fileContents: File;
}) {
  //todo turn on wait; put in try-catch?
  const presignedPostUrl = await getPresignedPostUrl(fileName, fileType);

  fetch(presignedPostUrl.url, {
    method: "PUT",
    headers: {
      "Content-Type": fileType,
    },
    body: fileContents,
  })
    .then(() => {
      console.log("image uploaded succ");
      //todo turn off wait
    })
    .catch((error) => {
      console.log("error", error);
      //todo turn off wait
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

async function getPresignedPostUrl(fileName: string, fileType: string) {
  const { data: presignedPostUrl } = await axios.get<PresignedPostUrlResponse>(
    `${API_BASE_URL}/${GET_PRESIGNED_URL_API_PATH}/${fileName}?fileType=${fileType}`
  );

  return presignedPostUrl;
}
