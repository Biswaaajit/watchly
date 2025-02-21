import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function SearchData({ filterdata }) {
  return (
    <Link
      to={`/videos/${filterdata._id}`}
      onMouseDown={(e) => e.preventDefault()}
      className="hover:bg-slate-100 pl-4 py-1 xs:py-2 block cursor-pointer"
    >
      {filterdata.title}
    </Link>
  );
}

// Prop validation

SearchData.propTypes = {
  filterdata: PropTypes.object,
};

export default SearchData;
