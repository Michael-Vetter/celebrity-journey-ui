import ReactRouterSetup from "./Components/router";
import React, { useState, useEffect } from "react";

let data = require("./Data/dualipa.json");
console.log("doing sort in app.js");

let cats = require("./Data/categories.json");
function App() {
  console.log("enter app.js");
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventDate, setEventDate] = useState("9999-88-77");
  const [videos, setVideos] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  //console.log("setting state in app.js");
  const [categoriesState, setCategoriesState] = useState(
    new Array(cats.length).fill(false)
  );

  useEffect(() => {
    console.log("useEffect in app.js");
    data.sort((a, b) => Date.parse(a.dateSort) - Date.parse(b.dateSort));
    setVideos(data);
  }, []);
  return (
    <ReactRouterSetup
      showEventModal={showEventModal}
      setShowEventModal={setShowEventModal}
      eventDate={eventDate}
      setEventDate={setEventDate}
      videos={videos}
      setVideos={setVideos}
      showFilters={showFilters}
      setShowFilters={setShowFilters}
      categoriesState={categoriesState}
      setCategoriesState={setCategoriesState}
    />
  );
}

export default App;
