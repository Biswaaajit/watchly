import { useState } from "react";
import UserProfileIcon from "./UserProfileIcon";
import UserProfileInfo from "./UserProfileInfo";

function UserImage() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="">
      <button onClick={() => setShowProfile((prev) => !prev)}>
        <UserProfileIcon />
      </button>

      {showProfile && <UserProfileInfo setShowProfile={setShowProfile} />}
    </div>
  );
}

export default UserImage;
