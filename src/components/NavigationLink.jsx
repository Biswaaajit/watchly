import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function NavigationLink({ icon, name, link, setFunc }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(link);
    setFunc(false);
  }
  return (
    <button
      onClick={handleClick}
      className="hover:bg-slate-200 flex items-center gap-4 w-[70%] rounded-lg py-1.5 px-3"
    >
      <span className="text-3xl">{icon}</span>
      <span className="font-semibold text-lg">{name}</span>
    </button>
  );
}

NavigationLink.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
  link: PropTypes.string,
  setFunc: PropTypes.func,
};

export default NavigationLink;
