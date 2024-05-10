import { RiSearchLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="tenant-name">Tenant</div>
      <div className="icon-group">
        <div className="icon-container">
          <RiSearchLine size={20} className="topbar-icon" />
        </div>
        <div className="icon-container">
          <IoMdNotificationsOutline size={26} className="topbar-icon" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
