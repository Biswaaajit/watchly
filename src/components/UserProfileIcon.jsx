import { useContext } from "react";
import { UserContext } from "../UserContext";
import PropTypes from "prop-types";

function UserProfileIcon({ width = "w-[2.5rem]", height = "h-[2.5rem]" }) {
  const { loginUser, loginUserImage } = useContext(UserContext);
  if (loginUserImage)
    return (
      <img
        className={`${width} rounded-full aspect-square object-cover`}
        src={loginUserImage}
      />
    );
  return (
    <div
      className={`bg-orange-500 text-white capitalize ${width} ${height} flex justify-center items-center rounded-full text-2xl`}
    >
      <p>{loginUser[0]}</p>
    </div>
  );
}

//Prop validation
UserProfileIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default UserProfileIcon;
