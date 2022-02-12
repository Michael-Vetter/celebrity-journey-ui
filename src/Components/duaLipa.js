import React from "react";
import RecordHeader from "./recordHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Offcanvas, Form } from "react-bootstrap";

console.log("duaLipa - before load data");
let data = require("../Data/dualipa.json");
let cats = require("../Data/categories.json");
const videos = require("../Data/dualipavideo.json");
console.log("duaLipa - after load data");
// const ListOfIds = data.map((_) => _.videos[0].videoId);
// let IdString = "";
// ListOfIds.forEach((_) => (IdString += "," + _));
//console.log("IdString", IdString);

const DuaLipa = (props) => {
  console.log("enter Dua Lipa Component");
  const handleClose = () => props.setShowFilters(false);
  const handleShow = () => props.setShowFilters(true);

  const handleFilter = (e) => {
    console.log("enter handleFilter");
    e.preventDefault();
    let newFilter = "";
    props.categoriesState.map((s, index) => {
      if (s) {
        newFilter += "," + cats[index].name;
      }
      return "";
    });
    //console.log("newFilter", newFilter);
    const newData = data.filter(
      (_) => newFilter.indexOf(_.categories[0].category) >= 0
    );

    console.log("handleFilter call sets");
    props.setVideos(newData);
    props.setShowFilters(false);
    console.log("exit handleFilter");
  };
  const handleOnCatChange = (position) => {
    console.log("enter handleOnCatChange");
    const updatedCheckedState = props.categoriesState.map((item, index) =>
      index === position ? !item : item
    );

    console.log("handleOnCatChange call set");
    props.setCategoriesState(updatedCheckedState);
    console.log("exit handleOnCatChange");
  };

  return (
    <div>
      <div className="container-fluid">
        <h4>
          <Button variant="primary" onClick={handleShow}>
            Filter Videos
          </Button>

          <Offcanvas show={props.showFilters} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter Videos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
              <Form onSubmit={handleFilter}>
                {cats.map(({ name }, index) => {
                  return (
                    <div key={`custom-checkbox-${index}`}>
                      <Form.Check
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        label={name}
                        checked={props.categoriesState[index]}
                        onChange={() => handleOnCatChange(index)}
                      />
                    </div>
                  );
                })}
                <Button variant="primary" type="submit">
                  Apply
                </Button>
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
        </h4>
        <div>This is a custom filter</div>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  row-cols-xl-4 p-1 m-10">
          {props.videos.map((record, index) => {
            return (
              <RecordHeader
                className="col"
                key={record.id}
                record={record}
                videoData={videos}
                videoIndex={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DuaLipa;
