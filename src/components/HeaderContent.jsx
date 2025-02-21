import { FaBarsStaggered } from "react-icons/fa6";
import PropTypes from "prop-types";
import Search from "./Search";
import { IoSearch } from "react-icons/io5";
import UserProfile from "./UserProfile";

function HeaderContent({ setShowSearch, setShowNav, setShowFull }) {
  return (
    <div className="flex items-center justify-between  px-1.5 xs:px-2 lg:px-4 py-2 shadow-sm">
      <div className="flex items-center gap-1.5 xs:gap-2">
        {/*               Desktop Bar             */}

        <button
          onClick={() => setShowFull((prevValue) => !prevValue)}
          className="bg-white hover:bg-slate-200 p-2 rounded-full hidden lg:block"
        >
          <FaBarsStaggered className="text-lg xs:text-2xl" />
        </button>

        {/*            Mobile Bar                  */}

        <button
          className=" hover:bg-slate-200 p-2.5 rounded-full block lg:hidden "
          onClick={() => setShowNav(true)}
        >
          <FaBarsStaggered className="text-lg xs:text-xl" />
        </button>
        <img
          src="/logo.png"
          alt="website Logo"
          className="w-[9rem] xs:w-[10rem] lg:w-[12rem]"
        />
      </div>

      {/* appears only upto MD */}

      <div className="grow flex md:hidden justify-end pr-3">
        <button
          onClick={() => setShowSearch(true)}
          className="bg-white hover:bg-slate-200 p-1 xs:p-2 rounded-full"
        >
          <IoSearch className="text-base xs:text-xl" />
        </button>
      </div>

      {/*  Appears after MD */}

      <Search style="hidden md:flex" width="w-0 md:w-[40vw]" />

      <UserProfile />
    </div>
  );
}

// prop validation

HeaderContent.propTypes = {
  setShowSearch: PropTypes.func,
  setShowNav: PropTypes.func,
  setShowFull: PropTypes.func,
};

export default HeaderContent;
