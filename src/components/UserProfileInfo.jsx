import { useContext } from "react";
import UserProfileIcon from "./UserProfileIcon";
import { UserContext } from "../UserContext";
import { LuUsers } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import UserProfileLink from "./UserProfileLink";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function UserProfileInfo({ setShowProfile }) {
  const { loginUser, loginEmail, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  function handleChannel() {
    setShowProfile(false);
    navigate("/channel");
  }

  return (
    <div className="bg-white shadow-[0_2px_15px_1px] shadow-zinc-500/50 pt-2 pb-3  absolute top-4 right-14 sm:right-16 lg:right-[70px] w-fit xs:w-[16rem] h-fit z-30  rounded-xl divide-y-2 divide-slate-300/40">
      <div className="flex items-start gap-3 py-4 px-5">
        <UserProfileIcon width="w-[3rem]" height="h-[3rem]" />
        <div className="text-sm">
          <p>{loginUser}</p>
          <p>{loginEmail}</p>
          <button
            onClick={handleChannel}
            className="mt-1.5 text-sky-700 font-semibold"
          >
            View your channel
          </button>
        </div>
      </div>
      <div className="space-y-2 py-3">
        <UserProfileLink
          icon={<LuUsers />}
          name="Switch accounts"
          onclick={() => navigate("/login")}
        />
        <UserProfileLink icon={<MdLogout />} name="Sign out" onclick={logOut} />
      </div>
      <div className="space-y-2 py-3 ">
        <UserProfileLink
          icon={<IoSettingsOutline />}
          name="Setting"
          onclick={() => setShowProfile(false)}
        />
        <UserProfileLink
          icon={<IoIosHelpCircleOutline />}
          name="Help"
          onclick={() => setShowProfile(false)}
        />
      </div>
    </div>
  );
}

//Prop validation
UserProfileInfo.propTypes = {
  setShowProfile: PropTypes.func,
};

export default UserProfileInfo;
