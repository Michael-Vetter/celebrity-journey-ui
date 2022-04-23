import ReactRouterSetup from "./Components/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logger from "./Components/logger";
import GetCalendarBody from "./Components/getCalendarBody";
import { parseISO } from "date-fns";

let data = require("./Data/dualipa.json");
let cats = require("./Data/categories.json");
let songs = require("./Data/songs.json");

function App() {
  const [adminAccount, setAdminAccount] = useState("wherewasdualipa"); //wherewasdualipa
  const [showEventModal, setShowEventModal] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [eventDate, setEventDate] = useState("9999-88-77");
  const [videos, setVideos] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [categoriesState, setCategoriesState] = useState(
    new Array(cats.length).fill(false)
  );
  const [songsState, setSongsState] = useState(
    new Array(songs.length).fill(false)
  );
  const [ip, setIP] = useState("");
  const [calendarNavData, setCalendarNavData] = useState({
    Loading: {
      label: "Loading...",
      index: 0,
      nodes: {},
    },
  });
  const [calendarBody, setCalendarBody] = useState([
    {
      title: "BBC Music Sound Of 2016 (Video count: 1)",
      date: parseISO("2016-01-03"),
    },
  ]);
  //const [ipCount, setIpCount] = useState(0);

  const [currentCalKey, setCurrentCalKey] = useState("2016/January");

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
    GetCalendarBody("2016/January", setCalendarBody);
  }, []);

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
      calendarNavData={calendarNavData}
      setCalendarNavData={setCalendarNavData}
      calendarBody={calendarBody}
      setCalendarBody={setCalendarBody}
      currentCalKey={currentCalKey}
      setCurrentCalKey={setCurrentCalKey}
      adminAccount={adminAccount}
      setAdminAccount={setAdminAccount}
      showEventForm={showEventForm}
      setShowEventForm={setShowEventForm}
      popUpMessage={popUpMessage}
      setPopUpMessage={setPopUpMessage}
      showPopUp={showPopUp}
      setShowPopUp={setShowPopUp}
    />
  );
}

export default App;
