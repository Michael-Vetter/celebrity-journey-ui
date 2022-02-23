import ReactRouterSetup from "./Components/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logger from "./Components/logger";

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
  const [ip, setIP] = useState("");
  //const [ipCount, setIpCount] = useState(0);

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    //console.log("axios", res.data);

    // if (ipCount === 0) {
    //   setIpCount(1);
    Logger(res.data);
    // }
    setIP(res.data);
  };

  useEffect(() => {
    data.sort((a, b) => Date.parse(a.dateSort) - Date.parse(b.dateSort));
    setVideos(data);
  }, []);

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
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
      ip={ip}
    />
  );
}

export default App;
