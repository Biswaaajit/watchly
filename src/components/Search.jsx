import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../VideoContext";
import SearchData from "./SearchData";

function Search({ style, width }) {
  const { videoData } = useContext(VideoContext);
  const [filterData, setFilterdData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  console.log({ videoData });

  useEffect(() => {
    if (!videoData) return;
    let data = videoData.filter((eachData) =>
      eachData.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log({ filter: data });
    setFilterdData(data);
  }, [searchText, videoData]);

  return (
    <div className={` ${style} flex-col relative z-40  `}>
      <div className="flex items-center px-2 py-1  rounded-full border-2 border-slate-300 hover:shadow-md gap-2 ">
        <IoSearch className="text-lg xs:text-xl" />
        <div className="w-fit flex flex-col">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            onChange={(e) => setSearchText(e.target.value)}
            className={`focus:outline-none  py-0 xs:py-0.5 ${width}`}
          />
        </div>
      </div>
      {show && (
        <div className="bg-white absolute top-11 z-50  text-xs xs:text-sm w-full rounded-xl shadow-[0px_0px_7px_1px] shadow-slate-300 py-3">
          {filterData.map((filterdata) => (
            <SearchData key={filterdata._id} filterdata={filterdata} />
          ))}
        </div>
      )}
    </div>
  );
}

//prop validation

Search.propTypes = {
  style: PropTypes.string,
  width: PropTypes.string,
};

export default Search;
