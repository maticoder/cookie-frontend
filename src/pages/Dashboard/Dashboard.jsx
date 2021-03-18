import React from "react";

import "./Dashboard.scss";

const Dashboard = ({
  user,
  logoutUser,
  addNotification,
  getCookie,
  history,
}) => {
  return (
    <div className="dashboard">
      <h1>dashboard</h1>
      <p>hello {user.name}</p>
      <button
        onClick={() =>
          addNotification({
            type: "success",
            message: "Yeah",
          })
        }
      >
        Klik
      </button>
      <button onClick={getCookie}>Do</button>
      <button
        onClick={() => {
          logoutUser();
          history.push("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
