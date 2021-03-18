import React, { useContext } from "react";

import { UserContext } from "../../context/UserContext.js";

import "./Dashboard.scss";

const Dashboard = ({ addNotification, getCookie, history }) => {
  const { user, logoutUser } = useContext(UserContext);

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
