import { useEffect, useRef, useState } from "react";
import UserProfileIcon from "./UserProfileIcon";
import UserProfileInfo from "./UserProfileInfo";

function UserImage() {
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  // Written to handle showProfile when we click outside of it

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }

    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (
    <div ref={profileRef} className="">
      <button onClick={() => setShowProfile((prev) => !prev)}>
        <UserProfileIcon />
      </button>

      {showProfile && <UserProfileInfo setShowProfile={setShowProfile} />}
    </div>
  );
}

export default UserImage;
