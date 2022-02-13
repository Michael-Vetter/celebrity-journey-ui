import React from "react";
import RecordHeader from "./recordHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Offcanvas, Form } from "react-bootstrap";

let data = require("../Data/dualipa.json");
let cats = require("../Data/categories.json");
let songs = require("../Data/songs.json");
const videos = require("../Data/dualipavideo.json");

const DuaLipa = (props) => {
  const handleClose = () => props.setShowFilters(false);
  const handleShow = () => props.setShowFilters(true);

  const handleFilter = (e) => {
    e.preventDefault();

    let newCatFilter = "";
    props.categoriesState.map((s, index) => {
      if (s) {
        newCatFilter += "," + cats[index].name;
      }
      return "";
    });
    console.log("newCatFilter", newCatFilter);
    let newData = [];
    if (newCatFilter.length > 0) {
      newData = data.filter(
        (_) => newCatFilter.indexOf(_.categories[0].category) >= 0
      );
    }
    console.log("1", newData.length);
    let newSongFilter = "";
    props.songsState.map((s, index) => {
      if (s) {
        newSongFilter += "," + songs[index].name;
      }
      return "";
    });
    console.log("newSongFilter", newSongFilter);
    if (newSongFilter.length > 0 && newData.length === 0) {
      console.log("song filter 1");
      newData = data.filter((_) => {
        let found = false;
        _.songs.forEach((s) => {
          if (newSongFilter.indexOf(s.song) > 0) {
            found = true;
          }
        });
        return found;
      });
    } else {
      console.log("song filter 1");
      newData = newData.filter((_) => {
        let found = false;
        _.songs.forEach((s) => {
          if (newSongFilter.indexOf(s.song) > 0) {
            found = true;
          }
        });
        return found;
      });
    }

    console.log("2", newData.length);
    if (newSongFilter.length > 0 || newCatFilter.length > 0) {
      props.setVideos(newData);
    } else {
      props.setVideos(data);
    }
    props.setShowFilters(false);
  };
  const handleOnCatChange = (position) => {
    const updatedCheckedState = props.categoriesState.map((item, index) =>
      index === position ? !item : item
    );

    props.setCategoriesState(updatedCheckedState);
  };
  const handleOnSongChange = (position) => {
    const updatedCheckedState = props.songsState.map((item, index) =>
      index === position ? !item : item
    );

    props.setSongsState(updatedCheckedState);
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
              <Offcanvas.Title>
                <h2>Filter Videos</h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form onSubmit={handleFilter}>
                <h3>Categories:</h3>
                <div className="filterContainer">
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
                </div>
                <h3>Songs:</h3>
                <div className="filterContainer">
                  {songs.map(({ name }, index) => {
                    return (
                      <div key={`custom-checkbox-${index}`}>
                        <Form.Check
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          label={name}
                          checked={props.songsState[index]}
                          onChange={() => handleOnSongChange(index)}
                        />
                      </div>
                    );
                  })}
                </div>
                <Button variant="primary" type="submit" className="m-4">
                  Apply
                </Button>
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
        </h4>
        <div>Video Count: {props.videos.length}</div>
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
