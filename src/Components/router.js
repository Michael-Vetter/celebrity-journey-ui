import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import MainTab from "./mainTab";
import AdminLogin from "./adminLogin";

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
              //videos={props.videos}
              //setVideos={props.setVideos}
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
              showEventForm={props.showEventForm}
              setShowEventForm={props.setShowEventForm}
              popUpMessage={props.popUpMessage}
              setPopUpMessage={props.setPopUpMessage}
              showPopUp={props.showPopUp}
              setShowPopUp={props.setShowPopUp}
              showVideoForm={props.showVideoForm}
              setShowVideoForm={props.setShowVideoForm}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminLogin
              setPopUpMessage={props.setPopUpMessage}
              setShowPopUp={props.setShowPopUp}
              setAdminAccount={props.setAdminAccount}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
