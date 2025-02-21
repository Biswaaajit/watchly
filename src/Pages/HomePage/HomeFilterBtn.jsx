import PropTypes from "prop-types";

function HomeFilterBtn({ filter, name, setFilter }) {
  return (
    <button
      onClick={() => setFilter(name)}
      className={`capitalize transition-all font-semibold text-sm sm:text-base px-4 py-1 rounded-md ${
        filter === name ? "text-white bg-black" : "bg-slate-200/50"
      }`}
    >
      {name}
    </button>
  );
}

//Prop Validation
HomeFilterBtn.propTypes = {
  filter: PropTypes.string,
  name: PropTypes.string,
  setFilter: PropTypes.func,
};

export default HomeFilterBtn;
