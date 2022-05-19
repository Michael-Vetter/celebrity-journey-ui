import React, { useState } from "react";
import GetActivityLog from "./getActivityLog";

const ActivityLog = () => {
  const [activityLog, setActivityLog] = useState([]);

  GetActivityLog(setActivityLog);
  return (
    <div>
      {activityLog.map((_) => {
        return <div>{_}</div>;
      })}
    </div>
  );
};

export default ActivityLog;
