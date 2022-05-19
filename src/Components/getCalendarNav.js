function GetCalendarNav(setCalendarNavData) {
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
  const eventUrl = url + "/api/calendar/nav";

  fetch(eventUrl, requestOptions)
    .then(CheckError)
    .then((data) => {
      setCalendarNavData(data);
    })
    .catch((error) => {
      //console.log("GetCalendarNav data error", error);
      //setIsLoading(false);
      //setState(StateAddResultsFromApi(state, ["error, try again"]));
    });
}

export default GetCalendarNav;
