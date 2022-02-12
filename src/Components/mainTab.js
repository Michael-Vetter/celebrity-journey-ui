import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CalendarView from "./calendarView";
import DuaLipa from "./duaLipa";
import { Container, Row, Col } from "react-bootstrap";

const MainTab = (props) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={0} lg={0} xl={1}></Col>
          <Col sm={12} lg={12} xl={10}>
            <h1>Dua Lipa Fan Site</h1>
            <h4>
              This site lists most Youtube videos showing performances,
              interviews, and fan encounters with Dua Lipa.
            </h4>
            <Tabs
              defaultActiveKey="Calendar"
              id="uncontrolled-tab-example"
              className="mb-3"
              mountOnEnter={true}
            >
              <Tab eventKey="Calendar" title="Calendar View">
                <CalendarView
                  showEventModal={props.showEventModal}
                  setShowEventModal={props.setShowEventModal}
                  eventDate={props.eventDate}
                  setEventDate={props.setEventDate}
                />
              </Tab>
              <Tab eventKey="All Videos" title="All Videos">
                <DuaLipa
                  videos={props.videos}
                  setVideos={props.setVideos}
                  showFilters={props.showFilters}
                  setShowFilters={props.setShowFilters}
                  categoriesState={props.categoriesState}
                  setCategoriesState={props.setCategoriesState}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col sm={0} lg={0} xl={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainTab;
