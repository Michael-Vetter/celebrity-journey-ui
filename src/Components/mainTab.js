import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DuaLipa2 from "./duaLipa2";
import { Container, Row, Col } from "react-bootstrap";
import CalendarView2 from "./calendarView2";

const MainTab = (props) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={0} lg={0} xl={0}></Col>
          <Col sm={12} lg={12} xl={12}>
            <h1>Dua Lipa Fan Site</h1>
            <h3>
              This site lists most Youtube videos showing performances,
              interviews, and fan encounters with Dua Lipa.
            </h3>
            <h4>
              <a
                href="https://www.instagram.com/wherewasdualipa/"
                rel="noreferrer"
                target="_blank"
              >
                Follow me on Instagram @wherewasdualipa
              </a>{" "}
              (If I'm missing a video or have any suggestions, DM me on
              Instagram)
            </h4>
            <Tabs
              defaultActiveKey="Calendar2"
              id="uncontrolled-tab-example"
              className="mb-3"
              mountOnEnter={true}
            >
              <Tab eventKey="Calendar2" title="Calendar View">
                <CalendarView2
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
                />
              </Tab>
              {/* <Tab eventKey="Calendar" title="Calendar View">
                <CalendarView
                  showEventModal={props.showEventModal}
                  setShowEventModal={props.setShowEventModal}
                  eventDate={props.eventDate}
                  setEventDate={props.setEventDate}
                />
              </Tab> */}
              <Tab eventKey="All Videos" title="All Videos">
                <DuaLipa2
                  // videos={props.videos}
                  // setVideos={props.setVideos}
                  showFilters={props.showFilters}
                  setShowFilters={props.setShowFilters}
                  categoriesState={props.categoriesState}
                  setCategoriesState={props.setCategoriesState}
                  songsState={props.songsState}
                  setSongsState={props.setSongsState}
                  showVideoForm={props.showVideoForm}
                  setShowVideoForm={props.setShowVideoForm}
                  setPopUpMessage={props.setPopUpMessage}
                  setShowPopUp={props.setShowPopUp}
                  adminAccount={props.adminAccount}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col sm={0} lg={0} xl={0}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainTab;
