import React, { useEffect } from "react";
//import { ListGroupItem, Input, ListGroup } from "reactstrap";
//import TreeMenu from "react-simple-tree-menu";
import "../../node_modules/react-simple-tree-menu/dist/main.css";
import CalendarView2Nav from "./calenderView2Nav";
import GetCalendarNav from "./getCalendarNav";
import CalendarView2Body from "./calendarView2Body";
import { Container, Row, Col } from "react-bootstrap";
import GetCalendarBody from "./getCalendarBody";

//https://github.com/iannbing/react-simple-tree-menu/blob/master/stories/index.stories.js

const CalendarView2 = (props) => {
  useEffect(() => {
    //passing getData method to the lifecycle method
    //console.log("CalendarView2 useEffect", props.currentCalKey);
    GetCalendarNav(props.setCalendarNavData);
    GetCalendarBody(props.currentCalKey, props.setCalendarBody);
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={2} lg={2} xl={1} className="border">
            <CalendarView2Nav
              calendarNavData={props.calendarNavData}
              setCalendarNavData={props.setCalendarNavData}
              currentCalKey={props.currentCalKey}
              setCurrentCalKey={props.setCurrentCalKey}
              calendarBody={props.calendarBody}
              setCalendarBody={props.setCalendarBody}
              adminAccount={props.adminAccount}
              showEventForm={props.showEventForm}
              setShowEventForm={props.setShowEventForm}
              popUpMessage={props.popUpMessage}
              setPopUpMessage={props.setPopUpMessage}
              showPopUp={props.showPopUp}
              setShowPopUp={props.setShowPopUp}
            ></CalendarView2Nav>
          </Col>
          <Col sm={10} lg={10} xl={11} className="border">
            <CalendarView2Body
              currentCalKey={props.currentCalKey}
              setCurrentCalKey={props.setCurrentCalKey}
              calendarBody={props.calendarBody}
              setCalendarBody={props.setCalendarBody}
              adminAccount={props.adminAccount}
              setAdminAccount={props.setAdminAccount}
            ></CalendarView2Body>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalendarView2;
