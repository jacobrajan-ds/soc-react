import React from "react";
import Topbar from "../Global/Topbar";
import Sidebar from "../Global/Sidebar";
import "./Dashboard.css";
import LineChart from "../components/LineChart/LineChart";
import Tables from "../components/Table/Tables";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      {/* <Topbar /> */}
      <div className="dashboard-right">
        <Topbar />
        <div className="linechart">
          <LineChart />
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
