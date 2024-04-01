import { FaSearch } from "react-icons/fa";
import "./sidebar.css";

const Search = () => {
  return (
    <div className="search">
      <input type="text" />
      <button className="">
        <FaSearch color="#724ff9" size={20} />
      </button>
    </div>
  );
};

export default Search;
