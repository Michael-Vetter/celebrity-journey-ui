import { parseISO } from "date-fns";

function GetCalendarBody(calendarNavData, setCalendarBody) {
  type EventType = {
    title: string;
    date: Date;
  };

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
  const eventUrl = url + "/api/calendar/month/" + calendarNavData;

  fetch(eventUrl, requestOptions)
    .then(CheckError)
    .then((data) => {
      //console.log("GetCalendarBody data", data);
      let newEvents = [] as EventType[];
      data.events.map((_) => {
        let newEvent: EventType = { title: _.title, date: parseISO(_.date) };
        newEvents.push(newEvent);
        return newEvent;
      });
      setCalendarBody(newEvents);
    })
    .catch((error) => {
      //console.log("GetCalendarBody data error", error);
      //setIsLoading(false);
      //setState(StateAddResultsFromApi(state, ["error, try again"]));
    });
}

export default GetCalendarBody;
