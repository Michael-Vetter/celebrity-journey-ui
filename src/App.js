import ReactRouterSetup from "./Components/router";
import React, { useState } from "react";

function App() {
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventDate, setEventDate] = useState("9999-88-77");

  return (
    <ReactRouterSetup
      showEventModal={showEventModal}
      setShowEventModal={setShowEventModal}
      eventDate={eventDate}
      setEventDate={setEventDate}
    />
  );
}

export default App;
