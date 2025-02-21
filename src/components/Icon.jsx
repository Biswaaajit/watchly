import PropTypes from "prop-types";

function Icon({ children, name }) {
  return (
    <button className="bg-slate-200/90 w-fit flex items-center px-4 py-1.5 rounded-full gap-2">
      <p className="text-2xl">{children}</p>
      <p className="capitalize font-semibold">{name}</p>
    </button>
  );
}

//Prop validation
Icon.propTypes = {
  children: PropTypes.node,
  name: PropTypes.any,
};
export default Icon;
