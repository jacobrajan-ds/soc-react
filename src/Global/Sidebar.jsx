import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../assets/logo.png";
import { FaAngleLeft } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { LuCompass } from "react-icons/lu";
import { GrVulnerability } from "react-icons/gr";
import { CiFileOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showIncidentResponseDropdown, setShowIncidentResponseDropdown] =
    useState(false);
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const toggleSidebarWidth = () => {
    setCollapsed((prev) => !prev);
  };
  const toggleIncidentResponseDropdown = () => {
    setShowIncidentResponseDropdown((prev) => !prev);
  };

  const toggleReportDropdown = () => {
    setShowReportDropdown((prev) => !prev);
  };

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown((prev) => !prev);
  };

  return (
    <div
      className={
        !collapsed ? "sidebar-container" : "sidebar-container_collapsed"
      }
    >
      <div className="sidebar-logo">
        {!collapsed ? <img src={Logo} alt="" /> : ""}
      </div>
      <div className="sidebar-divider"></div>
      <div className="sidebar-title">
        <span>MAIN</span>
        <div className="sidebar-icon__bg">
          <FaAngleLeft onClick={toggleSidebarWidth} />
        </div>
      </div>
      <div className="sidebar">
        <ul className="nav-links">
          <li>
            <a href="#">
              <i>
                <IoGridOutline />
              </i>
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Category
                </a>
              </li>
            </ul>
          </li>
          <li className={showIncidentResponseDropdown ? "showMenu" : ""}>
            <div className="iocn-link">
              <a href="#" onClick={toggleIncidentResponseDropdown}>
                <i>
                  <LuCompass />
                </i>
                <span className="link_name">Incident Response</span>
              </a>
              <div className="chevron">
                {!showIncidentResponseDropdown ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronUp />
                )}
              </div>
            </div>
          </li>
          {showIncidentResponseDropdown ? (
            <ul className={`sub-menu `}>
              <li>
                <a href="#">Alert</a>
              </li>
              <li>
                <a href="#">Indicator</a>
              </li>
            </ul>
          ) : (
            ""
          )}
          <li>
            <a href="#">
              <i>
                <GrVulnerability />
              </i>
              <span className="link_name">Vulnerability</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </li>
          <li className={showReportDropdown ? "showMenu" : ""}>
            <div className="iocn-link">
              <a href="#" onClick={toggleReportDropdown}>
                <i>
                  <CiFileOn />
                </i>
                <span className="link_name">Report</span>
              </a>
              <div className="chevron">
                {!showReportDropdown ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
          </li>
          {showReportDropdown ? (
            <ul className={`sub-menu `}>
              <li>
                <a href="#">Weekly Report</a>
              </li>
              <li>
                <a href="#">Alerts</a>
              </li>
            </ul>
          ) : (
            ""
          )}

          <li>
            <div className="iocn-link">
              <a href="#" onClick={toggleSettingsDropdown}>
                <i>
                  <IoSettingsOutline />
                </i>
                <span className="link_name">Settings</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className={`sub-menu ${showSettingsDropdown ? "show" : ""}`}>
              <li>
                <a className="link_name" href="#">
                  Plugins
                </a>
              </li>
              <li>
                <a href="#">UI Face</a>
              </li>
              <li>
                <a href="#">Pigments</a>
              </li>
              <li>
                <a href="#">Box Icons</a>
              </li>
            </ul>
          </li>
          {/* <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src="image/profile.jpg" alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">Prem Shahi</div>
                <div className="job">Web Designer</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
