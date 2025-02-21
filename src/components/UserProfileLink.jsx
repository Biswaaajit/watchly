import PropTypes from "prop-types";

function UserProfileLink({ icon, name, onclick }) {
  return (
    <button
      className="flex items-center gap-2 hover:bg-slate-200/50 w-full py-2 px-5"
      onClick={onclick}
    >
      <p className="text-2xl">{icon}</p>
      <p>{name}</p>
    </button>
  );
}

// Prop Validation

UserProfileLink.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
  onclick: PropTypes.func,
};

export default UserProfileLink;
