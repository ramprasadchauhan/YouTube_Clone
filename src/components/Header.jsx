import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { menuIcon, searchIcon, userIcon, youtubeLogo } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-10 w-10 pt-2 cursor-pointer"
          src={menuIcon}
          alt="menu"
        />
        <a href="/">
          <img className="h-14 mx-2" src={youtubeLogo} alt="youtube-logo" />
        </a>
      </div>

      <div className="col-span-10 px-20 flex">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full px-2"
          type="text"
        />
        <button className="border border-gray-400 bg-gray-100 border-collapse rounded-r-full">
          <img className="h-6 px-2" src={searchIcon} alt="search" />
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-8" src={userIcon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
