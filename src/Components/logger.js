export default function Logger(logInfo) {
  function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }
  //test
  //const url = "https://18dvn35d28.execute-api.us-east-1.amazonaws.com/Prod";

  //prod
  const url = "https://api.celebrity-journey.com";

  let formatedLogData = {
    data: JSON.stringify(logInfo),
  };
  //console.log("formatedLogData", formatedLogData);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formatedLogData),
  };

  const contactUrl = url + "/api/activity/log";

  fetch(contactUrl, requestOptions)
    .then(CheckError)
    .then(() => {
      //console.log("feedback sent");
    })
    .catch((error) => {
      //console.log("error", error);
    });
}
