function GetPopupVidsImgs(
  eventDate2,
  setPopUpVids,
  setPopUpImgs,
  setPopUpLoading
) {
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
  const eventUrl = url + "/api/calendar/dayitems/" + eventDate2;

  fetch(eventUrl, requestOptions)
    .then(CheckError)
    .then((data) => {
      setPopUpLoading(false);
      setPopUpVids(data.videos);
      setPopUpImgs(data.images);
      //   let newEvents = [] as EventType[];
      //   data.events.map((_) => {
      //     let newEvent: EventType = { title: _.title, date: parseISO(_.date) };
      //     newEvents.push(newEvent);
      //   });
      //   console.log("GetCalendarBody data newEvents", newEvents);
      //   setCalendarBody(newEvents);
    })
    .catch((error) => {
      //console.log("GetPopupVidsImgs data error", error);
      setPopUpLoading(false);
      //setIsLoading(false);
      //setState(StateAddResultsFromApi(state, ["error, try again"]));
    });
}

export default GetPopupVidsImgs;
