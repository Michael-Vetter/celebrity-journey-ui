import React from "react";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./home";
//import DuaLipa from "./duaLipa";
import MainTab from "./mainTab";
import Admin from "./admin";

const ReactRouterSetup = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dualipa" element={<DuaLipa />} /> */}
        <Route
          path="/dualipa"
          element={
            <MainTab
              showEventModal={props.showEventModal}
              setShowEventModal={props.setShowEventModal}
              eventDate={props.eventDate}
              setEventDate={props.setEventDate}
              videos={props.videos}
              setVideos={props.setVideos}
              showFilters={props.showFilters}
              setShowFilters={props.setShowFilters}
              categoriesState={props.categoriesState}
              setCategoriesState={props.setCategoriesState}
              songsState={props.songsState}
              setSongsState={props.setSongsState}
              ip={props.ip}
              ipCount={props.ipCount}
              setIpCount={props.setIpCount}
              calendarNavData={props.calendarNavData}
              setCalendarNavData={props.setCalendarNavData}
              currentCalKey={props.currentCalKey}
              setCurrentCalKey={props.setCurrentCalKey}
              calendarBody={props.calendarBody}
              setCalendarBody={props.setCalendarBody}
              adminAccount={props.adminAccount}
              setAdminAccount={props.setAdminAccount}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
