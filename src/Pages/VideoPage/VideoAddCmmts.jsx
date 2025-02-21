import { FaUserCircle } from "react-icons/fa";
import UserProfileIcon from "../../components/UserProfileIcon";
import { UserContext } from "../../UserContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

function VideoAddCmmts({ videoId, fetchVideoData }) {
  const { loginUserImage, loginUser, loginUserId } = useContext(UserContext);
  const [showBtn, setShowBtn] = useState(false);
  const [text, setText] = useState("");
  const token = localStorage.getItem("token");
  const isLogin = loginUserImage && loginUser;

  // functions
  async function handleAddComment(e) {
    e.preventDefault();
    if (!isLogin) {
      toast.error("Login to comment");
      return;
    }
    if (!text) {
      return;
    }
    try {
      const res = await fetch(
        `https://watchly-backend-1.onrender.com/videos/comment/${videoId}`,
        {
          method: "POST",
          body: JSON.stringify({
            userName: loginUser,
            userImg: loginUserImage,
            userId: loginUserId,
            text,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${token}`,
          },
        }
      );
      const resultData = res.json();
      if (!res.ok) {
        toast.error(resultData.message);
      } else {
        console.log(resultData);
        toast.success("Comment added");
        setTimeout(() => {
          fetchVideoData();
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex  gap-2 w-full">
      <div>
        {isLogin ? (
          <UserProfileIcon width="w-[3rem]" height="h-[3rem]" />
        ) : (
          <FaUserCircle className="text-5xl text-blue-400" />
        )}
      </div>
      <form onSubmit={handleAddComment} className="flex flex-col w-full gap-4">
        <input
          onFocus={() => setShowBtn(true)}
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          placeholder="Add a comment..."
          className="focus:outline-none border-b border-slate-300 w-full pb-1 pl-2"
        />
        {showBtn && (
          <div className="flex justify-end gap-3 font-semibold">
            <button
              onClick={() => setShowBtn(false)}
              type="button"
              className="px-4 py-0.5 rounded-lg hover:bg-black/50 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-sky-300 hover:bg-sky-600 px-4 py-0.5 rounded-lg text-white transition-all"
            >
              Add
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

//Prop Validation
VideoAddCmmts.propTypes = {
  videoId: PropTypes.string,
  fetchVideoData: PropTypes.func,
};

export default VideoAddCmmts;
