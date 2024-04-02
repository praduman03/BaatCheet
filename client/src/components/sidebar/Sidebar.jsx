import Search from "./Search";
import "./sidebar.css";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search />
      <Conversations />
      <div className="pt-4">
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
