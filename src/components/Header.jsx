import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { menuIcon, searchIcon, userIcon, youtubeLogo } from "../utils/constant";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
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

      <div className="col-span-10 px-20 flex flex-col">
        <div className="flex">
          <input
            className="w-1/2 border border-gray-400 rounded-l-full px-2 py-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 bg-gray-100 border-collapse rounded-r-full">
            <img className="h-6 px-2" src={searchIcon} alt="search" />
          </button>
        </div>
        <div>
          {showSuggestions && (
            <div className="absolute bg-white py-2 px-2 w-[26rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100 "
                  >
                    <img className="h-6 px-2 inline" src={searchIcon} /> {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img className="h-8" src={userIcon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
