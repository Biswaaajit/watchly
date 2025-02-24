import {
  IoFilmOutline,
  IoGameControllerOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuMusic4 } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";
import { MdOutlineHome, MdOutlineSubscriptions } from "react-icons/md";
import SideNavigationLink from "./SideNavigationLink";
import PropTypes from "prop-types";

function Navigation({ showFull }) {
  return (
    <div className=" w-fit h-full  hidden lg:block px-2.5 space-y-6 py-6 ">
      <SideNavigationLink
        name="Home"
        link="/"
        icon={<MdOutlineHome />}
        showFull={showFull}
      />
      <SideNavigationLink
        name="Subscription"
        link="/"
        icon={<MdOutlineSubscriptions />}
        showFull={showFull}
      />
      <SideNavigationLink
        name="Trending"
        link="/"
        icon={<RiFireLine />}
        showFull={showFull}
      />
      <SideNavigationLink
        name="Music"
        link="/"
        icon={<LuMusic4 />}
        showFull={showFull}
      />
      <SideNavigationLink
        name="Film"
        link="/"
        icon={<IoFilmOutline />}
        showFull={showFull}
      />
      <SideNavigationLink
        name="Gaming"
        link="/"
        icon={<IoGameControllerOutline />}
        showFull={showFull}
      />
      <SideNavigationLink
        showFull={showFull}
        name="Setting"
        link="/"
        icon={<IoSettingsOutline />}
      />
    </div>
  );
}

//Prop validation

Navigation.propTypes = {
  showFull: PropTypes.bool,
};

export default Navigation;
