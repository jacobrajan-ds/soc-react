import React from "react";
import Topbar from "../Global/Topbar";
import Sidebar from "../Global/Sidebar";
import "./Dashboard.css";
import LineChart from "../components/LineChart/LineChart";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <Topbar />
      {/* <div className="dashboard-right">
        <Topbar />
        <div className="linechart">
          <LineChart />
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
