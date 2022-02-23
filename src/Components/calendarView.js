import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../react-big-calendar.css";
import EventItems from "./eventItems";

//https://medium.com/nerd-for-tech/making-a-nested-accordion-in-react-from-json-7d307b038f84#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhMDA2MjBjNWFhN2JlOGNkMDNhNmYzYzY4NDA2ZTQ1ZTkzYjNjYWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NDI0NjM5MzQsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMzk4MzU3MTI5OTc4MTU0MTY1MSIsImVtYWlsIjoibWljaGFlbHNjb3R0dmV0dGVyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiTm9SYWluSW5NeUNsb3VkIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpBbkp1UmhJRzh2cDR2Yk8zaE1JQU1KdUtwQ2NYbndodkRjLUU9czk2LWMiLCJnaXZlbl9uYW1lIjoiTm9SYWluSW5NeUNsb3VkIiwiaWF0IjoxNjQyNDY0MjM0LCJleHAiOjE2NDI0Njc4MzQsImp0aSI6ImQ1ZjU0NjYwYzg2YmU1MzA5MDY3ZTAwN2JkOTI4ZjcwMWNlYjhmMzgifQ.uXASX11g2KgX6l6GVKDPyP-vA7y71AMnbP5HuYuLuQaF279C2bOVL4Et_itphaonO7JCoSPgtMk5nAvGhSdMaCE-W0VpnYwJheZfdpBke3bClCKnEpKqfyDGo8Fu5n5lv1sJHNjtmDRnziQhPRM5G0f5hJCJddUTuwLBV75mlrrkiZfqMdbjcFSVP0Q6Vg-CFEw0zFFdgJhXaoB3xOIMC40UZWeNe3r_24aFZXcwz8J3w3wQxkwviSXqQNfy17c-kS_bOIFX7Xh_8VQ24Jwv3XGGicYLTZsNppMH9YVjdVspsEkHwZqqNRmkWWxyCmcK1VmHU2rJNM3RNqkZJtpCJQ
//https://www.npmjs.com/package/react-big-calendar
const localizer = momentLocalizer(moment);
//console.log("localizer", localizer);
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const CalendarView = (props) => {
  let data = require("../Data/dualipa.json");
  let eventData = require("../Data/events.json");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function videoCountYear(year) {
    return data.filter((_) => _.dateSort.indexOf(year) >= 0).length;
  }
  function videoCountYearMonth(year, month) {
    let monthNumber = "00" + (monthNames.indexOf(month) + 1);
    monthNumber = monthNumber.substring(monthNumber.length - 2);
    const searchString = year + "-" + monthNumber;
    return data.filter((_) => _.dateSort.indexOf(searchString) >= 0).length;
  }
  function videoCountByEventDate(date) {
    return data.filter((_) => _.dateSort === date).length;
  }

  function accordify(jsonData) {
    let yearPanels = [];
    jsonData.forEach((year) => {
      let monthPanels = [];
      year.months.forEach((month) => {
        //event loop
        let eventPanels = [];

        month.events.forEach((event) => {
          let startDate = moment(event.date, "YYYY-MM-DD").toDate(); //new Date(event.date);
          //let endDate = moment(startDate).add(1, "days").toDate();
          //console.log(event.date, startDate, endDate);
          let eventPanel = {
            key: event.id,
            title:
              event.name +
              " (" +
              videoCountByEventDate(event.date) +
              " videos)",
            start: startDate,
            end: startDate,
            allDay: true,
          };
          eventPanels.push(eventPanel);
        });

        //console.log("eventPanels", eventPanels);
        //console.log("year.year + month.month", year.year, month.month);
        let monthPanel = {
          key: year.year + month.month,
          title:
            month.month +
            " (" +
            videoCountYearMonth(year.year, month.month) +
            " videos)",
          content: {
            content: (
              <div className="App">
                <Calendar
                  localizer={localizer}
                  defaultDate={new Date(month.month + " 1, " + year.year)}
                  defaultView="month"
                  style={{ height: "60vh" }}
                  toolbar={false}
                  events={eventPanels}
                  onSelectEvent={showEvents}
                />
              </div>
            ),
          },
        };
        monthPanels.push(monthPanel);
      });

      let yearPanel = {
        key: year.year,
        title: year.year + " (" + videoCountYear(year.year) + " videos)",
        content: {
          content: (
            <div>
              <Accordion.Accordion panels={monthPanels} />
            </div>
          ),
        },
      };
      yearPanels.push(yearPanel);
    });

    return (
      <Accordion defaultActiveIndex={0} panels={yearPanels} fluid styled />
    );
  }

  data.sort((a, b) => Date.parse(a.dateSort) - Date.parse(b.dateSort));
  //const videos = require("../Data/dualipavideo.json");
  //console.log("videos", videos);

  //const ListOfIds = data.map((_) => _.videos[0].videoId);
  //let IdString = "";
  //ListOfIds.forEach((_) => (IdString += "," + _));

  function showEvents(e) {
    props.setEventDate(e.start);
    props.setShowEventModal(true);
  }

  return (
    <div>
      <EventItems
        show={props.showEventModal}
        setShow={props.setShowEventModal}
        eventDate={props.eventDate}
        setEventDate={props.setEventDate}
      />
      <div className="container-fluid">
        <Row>
          {/* <Col sm={0} lg={0} xl={1}></Col> */}
          {/* <Col sm={12} lg={12} xl={10}> */}
          <Col sm={12}>
            <h4>
              Videos on this tab are organized by year, month, and grouped by
              event date.
            </h4>
            <h4>Current Video Count: {data.length}</h4>

            <div>{accordify(eventData)}</div>
          </Col>
          {/* <Col sm={0} lg={0} xl={1}></Col> */}
        </Row>
      </div>
    </div>
  );
};

export default CalendarView;
