import ReactRouterSetup from "./Components/router";
import React, { useState, useEffect } from "react";

let data = require("./Data/dualipa.json");

let cats = require("./Data/categories.json");
let songs = require("./Data/songs.json");
function App() {
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventDate, setEventDate] = useState("9999-88-77");
  const [videos, setVideos] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [categoriesState, setCategoriesState] = useState(
    new Array(cats.length).fill(false)
  );
  const [songsState, setSongsState] = useState(
    new Array(songs.length).fill(false)
  );

  useEffect(() => {
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
      songsState={songsState}
      setSongsState={setSongsState}
    />
  );
}

export default App;
