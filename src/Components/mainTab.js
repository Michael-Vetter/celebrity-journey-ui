import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CalendarView from "./calendarView";
import DuaLipa from "./duaLipa";

const MainTab = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1>Main Tab</h1>
        <Tabs
          defaultActiveKey="Calendar"
          id="uncontrolled-tab-example"
          className="mb-3"
          mountOnEnter={true}
        >
          <Tab eventKey="Calendar" title="Calendar">
            <CalendarView />
          </Tab>
          <Tab eventKey="All Videos" title="Profile">
            <DuaLipa />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MainTab;
