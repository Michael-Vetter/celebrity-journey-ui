const EventLookup = async (year, month) => {
  //setIsLoading(true);
  function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const url = "https://api.celebrity-journey.com";
  const eventUrl = url + "/api/events/" + year + "/" + month;

  //console.log("EventLookup begin eventUrl", eventUrl);

  fetch(eventUrl, requestOptions)
    .then(CheckError)
    .then((data) => {
      //setIsLoading(false);

      if (data.length === 0) {
        data = ["no results"];
      }
      if (data[0] === "default return") {
        data[0] = "no results";
      }
      //console.log("event data", data);
      return data;
      //setState(StateAddResultsFromApi(state, data));
    })
    .catch((error) => {
      //console.log("event data error", error);
      //setIsLoading(false);
      //setState(StateAddResultsFromApi(state, ["error, try again"]));
    });
};

export default EventLookup;
