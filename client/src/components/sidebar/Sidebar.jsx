import Search from "./Search";
import "./sidebar.css";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search />
      <Conversations />
      <button className="logout">Logout</button>
    </div>
  );
};

export default Sidebar;
