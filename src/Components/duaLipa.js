import React from "react";
import RecordHeader from "./recordHeader";
import "bootstrap/dist/css/bootstrap.min.css";

let data = require("../Data/dualipa.json");
//console.log("data", data);

data.sort((a, b) => Date.parse(a.dateSort) - Date.parse(b.dateSort));
const videos = require("../Data/dualipavideo.json");
//console.log("videos", videos);

const ListOfIds = data.map((_) => _.videos[0].videoId);
let IdString = "";
ListOfIds.forEach((_) => (IdString += "," + _));
//console.log("IdString", IdString);

const DuaLipa = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1>Dua Lipa</h1>
        <h4>
          This site lists most Youtube videos showing performances, interviews,
          and fan encounters with Dua Lipa. (work in progress)
        </h4>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  row-cols-xl-4 p-1 m-10">
          {data.map((record, index) => {
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
