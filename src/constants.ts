let REGION: string;
let API_BASE_URL: string;
let S3_BUCKET_NAME = "celebrityjourneyimages";

API_BASE_URL = "https://api.celebrity-journey.com";
REGION = "us-east-1";

export const S3_BUCKET_URL = `https://${S3_BUCKET_NAME}.s3.amazonaws.com`;
export const MAX_FILE_SIZE_BYTES = 5000000;

export { REGION, API_BASE_URL };
