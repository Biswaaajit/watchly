import { FaArrowLeft } from "react-icons/fa6";
import PropTypes from "prop-types";
import Search from "./Search";

function HeaderSearch({ setShowSearch }) {
  return (
    <div className=" flex items-center  py-2 gap-1 px-3 shadow-sm">
      <button
        onClick={() => setShowSearch(false)}
        className="bg-white hover:bg-slate-200 p-2 text-base xs:text-xl rounded-full"
      >
        <FaArrowLeft />
      </button>
      <Search
        style="flex relative left-[50%] -translate-x-1/2"
        width="w-[65vw] sm:w-[50vw]"
      />
    </div>
  );
}

HeaderSearch.propTypes = {
  setShowSearch: PropTypes.func,
};

export default HeaderSearch;
