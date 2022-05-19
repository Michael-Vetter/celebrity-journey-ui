import { v4 as uuidv4 } from "uuid";

export default function PutEvent(
  eventName: string,
  eventDate: string,
  callback: Function
) {
  type AddEvent = {
    id: string;
    name: string;
    dateString: string;
  };

  let newEvent: AddEvent = {
    id: uuidv4(),
    name: eventName,
    dateString: eventDate,
  };

  //console.log("PutEvent newEvent", newEvent);

  function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }

  const url = "https://api.celebrity-journey.com";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEvent),
  };

  const contactUrl = url + "/api/events";

  fetch(contactUrl, requestOptions)
    .then(CheckError)
    .then(() => {
      callback("Event Added!");
      //console.log("event sent");
    })
    .catch((error) => {
      callback("Error adding event - please try again.");
      //console.log("event error", error);
    });
}
