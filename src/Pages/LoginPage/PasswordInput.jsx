import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import PropTypes from "prop-types";

function PasswordInput({ setPassword, value }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center bg-transparent  border-b-2 border-slate-400 mb-3 xl:mb-5  pb-0 hover:pb-2.5 focus:pb-2.5  pl-1 pr-2 transition-all">
      <input
        className="grow focus:outline-none bg-transparent"
        type={show ? "text" : "password"}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={value}
        required
      />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className=" text-slate-600"
      >
        {show ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
    </div>
  );
}

// Prop Validation
PasswordInput.propTypes = {
  setPassword: PropTypes.func,
  value: PropTypes.value,
};

export default PasswordInput;
