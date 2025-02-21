import PropTypes from "prop-types";
function LoginBtn({ name, message, loading = false }) {
  return (
    <button
      disabled={loading}
      className="bg-gray-900 hover:bg-gray-800 text-white py-1.5 font-semibold rounded-lg mt-4 transition-all"
      type="submit"
    >
      {loading ? message : name}
    </button>
  );
}

//Prop Validation
LoginBtn.propTypes = {
  name: PropTypes.string,
  loading: PropTypes.bool,
  message: PropTypes.string,
};

export default LoginBtn;
