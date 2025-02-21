import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function SideNavigationLink({ name, icon, link, showFull }) {
  return (
    <NavLink
      to={link}
      className={`flex items-center bg-white py-1 rounded-lg px-2.5 hover:bg-slate-200/60 transition-all duration-500 hover:duration-150 ${
        showFull ? "flex-row gap-4" : "flex-col gap-0"
      }`}
    >
      <span className=" text-3xl xl:text-4xl">{icon}</span>
      <span
        className={`font-semibold ${
          showFull ? "text-base xl:text-lg" : "text-[10px]"
        }`}
      >
        {name}
      </span>
    </NavLink>
  );
}

// Prop validation

SideNavigationLink.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.node,
  link: PropTypes.string,
  showFull: PropTypes.bool,
};

export default SideNavigationLink;
