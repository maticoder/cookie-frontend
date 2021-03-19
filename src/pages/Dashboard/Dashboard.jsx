import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";

import "./Dashboard.scss";

const Dashboard = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="dashboard">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCounter((c) => c + 1)}
      >
        Klik {counter}
      </Button>
    </div>
  );
};

export default Dashboard;
