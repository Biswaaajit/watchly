import PropTypes from "prop-types";

function InputField({
  type,
  placeholder,
  setFunc,
  value,
  priority = true,
  disabled = false,
}) {
  return (
    <input
      className="bg-transparent  border-b-2 border-slate-400 focus:outline-none pb-0.5 xl:mb-5 hover:pb-2.5 focus:pb-2.5 mb-3  pl-1 transition-all"
      onChange={(e) => setFunc(e.target.value)}
      type={type}
      placeholder={placeholder}
      required={priority}
      value={value}
      disabled={disabled}
    />
  );
}

//Prop Validation
InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  setFunc: PropTypes.func,
  priority: PropTypes.bool,
  value: PropTypes.any,
  disabled: PropTypes.bool,
};

export default InputField;
