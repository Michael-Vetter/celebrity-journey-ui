import React, { useEffect, useState } from "react";
import RecordHeader2 from "./recordHeader2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Offcanvas, Form } from "react-bootstrap";
import GetVideosWithFilter from "./getVideosWithFilter";
import Image from "react-bootstrap/Image";
import AddVideoForm from "./addVideoForm";

//let data = require("../Data/dualipa.json");
let cats = require("../Data/categories.json");
let songs = require("../Data/songs.json");
//const videos = require("../Data/dualipavideo.json");

const DuaLipa2 = (props) => {
  const handleClose = () => props.setShowFilters(false);
  const handleShow = () => props.setShowFilters(true);
  const handleShowVideo = () => props.setShowVideoForm(true);

  const [videoData, setVideoData] = useState([]);
  const [videosLoading, setVideosLoading] = useState(true);

  useEffect(() => {
    //passing getData method to the lifecycle method
    GetVideosWithFilter(setVideoData, "", "", setVideosLoading);
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    setVideosLoading(true);
    //console.log("Filter to be implemented");
    let newCatFilter = "";
    props.categoriesState.map((s, index) => {
      if (s) {
        newCatFilter += "," + cats[index].name;
      }
      return "";
    });

    let newSongFilter = "";
    props.songsState.map((s, index) => {
      if (s) {
        newSongFilter += "," + songs[index].name;
      }
      return "";
    });
    //console.log("newSongFilter", newSongFilter);

    GetVideosWithFilter(
      setVideoData,
      newSongFilter,
      newCatFilter,
      setVideosLoading
    );

    props.setShowFilters(false);
  };

  const handleOnCatChange = (position) => {
    //console.log("handleOnCatChange", position);
    const updatedCheckedState = props.categoriesState.map((item, index) =>
      index === position ? !item : item
    );

    props.setCategoriesState(updatedCheckedState);
  };
  const handleOnSongChange = (position) => {
    //console.log("handleOnSongChange", position);
    const updatedCheckedState = props.songsState.map((item, index) =>
      index === position ? !item : item
    );

    props.setSongsState(updatedCheckedState);
  };

  return (
    <div>
      <div className="container-fluid">
        <h4>
          <Button className="m-1" variant="primary" onClick={handleShow}>
            Filter Videos
          </Button>
          <div hidden={props.adminAccount.length === 0}>
            <Button className="m-1" variant="primary" onClick={handleShowVideo}>
              Add Video
            </Button>
          </div>
          <div hidden={props.showVideoForm}>
            <AddVideoForm
              showVideoForm={props.showVideoForm}
              setShowVideoForm={props.setShowVideoForm}
              setPopUpMessage={props.setPopUpMessage}
              setShowPopUp={props.setShowPopUp}
              songs={songs}
            />
          </div>
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
                      <div key={`custom-checkbox-cat-${index}`}>
                        <Form.Check
                          type="checkbox"
                          id={`custom-checkbox-cat-${index}`}
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
                      <div key={`custom-checkbox-song-${index}`}>
                        <Form.Check
                          type="checkbox"
                          id={`custom-checkbox-song-${index}`}
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
        <div hidden={!videosLoading} className="imageHeader">
          <Image
            className="imageHeader"
            src={require("../img/loading.png").default}
            alt="loading..."
          ></Image>
        </div>
        <div hidden={videosLoading}>
          <div>Video Count: {videoData.length}</div>
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  row-cols-xl-4 p-1 m-10">
            {videoData.map((record, index) => {
              return (
                <RecordHeader2
                  className="col"
                  key={index}
                  record={record}
                  videoIndex={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaLipa2;
