import { useState } from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderContent from "./HeaderContent";
import MobileNav from "./MobileNav";
import PropTypes from "prop-types";

function Header({ setShowFull }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className="">
        {showSearch ? (
          <HeaderSearch setShowSearch={setShowSearch} />
        ) : (
          <HeaderContent
            setShowSearch={setShowSearch}
            setShowNav={setShowNav}
            setShowFull={setShowFull}
          />
        )}
      </div>

      {showNav && <MobileNav setShowNav={setShowNav} />}
    </div>
  );
}

// Prop Valiadtion
Header.propTypes = {
  setShowFull: PropTypes.func,
};

export default Header;
