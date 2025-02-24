import { FaBarsStaggered } from "react-icons/fa6";
import NavigationLink from "./NavigationLink";
import { MdOutlineHome, MdOutlineSubscriptions } from "react-icons/md";
import PropTypes from "prop-types";
import { RiFireLine } from "react-icons/ri";
import { LuMusic4 } from "react-icons/lu";
import {
  IoFilmOutline,
  IoGameControllerOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

function MobileNav({ setShowNav }) {
  const navRef = useRef(null);
  //Animation of navigation bar
  useGSAP(() => {
    gsap.from(navRef.current, {
      x: -200,
      duration: 0.35,
    });
  }, []);

  return (
    <div className="w-full h-screen lg:hidden bg-slate-600/30 absolute top-0 z-50">
      <div
        ref={navRef}
        className="w-[60vw] xs:w-[20rem] sm:w-[20rem] bg-white  h-full"
      >
        <div className="flex items-center px-4 py-4 gap-4 shadow-sm">
          {/* Mobile Bar */}

          <button
            onClick={() => setShowNav(false)}
            className="hover:bg-slate-300 p-2.5 rounded-full text-xl"
          >
            <FaBarsStaggered />
          </button>

          {/* Logo */}

          <img src="/logo.png" className="w-[10rem]" />
        </div>

        {/* Navigation */}

        <div className="w-full space-y-4 pl-4 py-3 mt-5">
          <NavigationLink
            name="Home"
            link="/"
            icon={<MdOutlineHome />}
            setFunc={setShowNav}
          />
          <NavigationLink
            name="Subscription"
            link="/"
            icon={<MdOutlineSubscriptions />}
            setFunc={setShowNav}
          />
          <NavigationLink
            name="Trending"
            link="/"
            icon={<RiFireLine />}
            setFunc={setShowNav}
          />
          <NavigationLink
            name="Music"
            link="/"
            icon={<LuMusic4 />}
            setFunc={setShowNav}
          />
          <NavigationLink
            name="Film"
            link="/"
            icon={<IoFilmOutline />}
            setFunc={setShowNav}
          />
          <NavigationLink
            name="Gaming"
            link="/"
            icon={<IoGameControllerOutline />}
            setFunc={setShowNav}
          />
          <NavigationLink
            name="Setting"
            link="/"
            icon={<IoSettingsOutline />}
            setFunc={setShowNav}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

//Prop Valiadtion
MobileNav.propTypes = {
  setShowNav: PropTypes.func,
};

export default MobileNav;
