import React, { useState } from "react";
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
} from "@zach.codes/react-calendar";
import "../../node_modules/react-simple-tree-menu/dist/main.css";
import { format, startOfMonth } from "date-fns";
import MyDayComponent from "./myDayComponent";
import "@zach.codes/react-calendar/dist/calendar-tailwind.css";
import EventItems2 from "./eventItems2";
import GetPopupVidsImgs from "./getPopupVidsImgs";

//import EventLookup from "./eventLookup";

const CalendarView2Body = (myProps) => {
  type EventType = {
    title: string;
    date: Date;
  };

  const [showEventModal2, setShowEventModal2] = useState(false);
  const [eventDate2, setEventDate2] = useState("2000-01-01");
  const [eventTitle, setEventTitle] = useState("");
  const [popUpVids, setPopUpVids] = useState([]);
  const [popUpImgs, setPopUpImgs] = useState([]);
  const [popUpLoading, setPopUpLoading] = useState(true);

  function showEvents(e) {
    setPopUpLoading(true);
    setPopUpVids([]);
    setPopUpImgs([]);
    setEventDate2(e.target.title);
    setEventTitle(e.target.innerHTML);
    setShowEventModal2(true);
    GetPopupVidsImgs(
      e.target.title,
      setPopUpVids,
      setPopUpImgs,
      setPopUpLoading
    );
  }

  return (
    <div hidden={myProps.calendarBody.length === 0}>
      <EventItems2
        showEventModal2={showEventModal2}
        setShowEventModal2={setShowEventModal2}
        eventDate2={eventDate2}
        eventTitle={eventTitle}
        setEventDate2={setEventDate2}
        popUpVids={popUpVids}
        popUpImgs={popUpImgs}
        popUpLoading={popUpLoading}
      />
      <MonthlyCalendar
        currentMonth={startOfMonth(myProps.calendarBody[0].date)}
        onCurrentMonthChange={(date) =>
          console.log("onCurrentMonthChange called", date)
        }
      >
        <MonthlyNav />
        <MonthlyBody events={myProps.calendarBody}>
          <MonthlyDay<EventType>
            renderDay={(data) =>
              data.map((item, index) => (
                <div className="border" key={1000 + index}>
                  {/* <DefaultMonthlyEventItem
                  key={index}
                  title={item.title}
                  // Format the date here to be in the format you prefer
                  date={format(item.date, "k:mm")}
                /> */}
                  <div>
                    <MyDayComponent
                      key={2000 + index}
                      title={item.title}
                      date={format(item.date, "yyyy-MM-dd")}
                      onClick={showEvents}
                      adminAccount={myProps.adminAccount}
                    />
                  </div>
                </div>
              ))
            }
          />
        </MonthlyBody>
      </MonthlyCalendar>
    </div>
  );
};

export default CalendarView2Body;
