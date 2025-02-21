import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import UserImage from "./UserImage";

function UserProfile() {
  const { loginUser } = useContext(UserContext);
  return (
    <div>
      {loginUser ? (
        <UserImage />
      ) : (
        <Link
          to="/login"
          className="flex items-center border-[2px] border-slate-200 text-blue-500  px-2 lg:px-3 py-1 rounded-full gap-1 "
        >
          <FaRegCircleUser className="text-base xs:text-xl lg:text-2xl" />
          <span className="text-sm xs:text-base lg:text-lg">Sign in</span>
        </Link>
      )}
    </div>
  );
}

export default UserProfile;
