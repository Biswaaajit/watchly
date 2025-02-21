import PropTypes from "prop-types";
import VideoCommentsUsers from "./VideoCommentsUsers";
import dateFormat from "../../utils/dateFormat";
import { IoMdMore } from "react-icons/io";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import VideoCommentsEdit from "./VideoCommentsEdit";
import VideoCommentsEditInput from "./VideoCommentsEditInput";

function VideoCommentsInfo({ data, videoId, fetchVideoData }) {
  const { loginUserId } = useContext(UserContext);
  const [showMore, setShowMore] = useState(false);
  const [edit, setEdit] = useState(false);
  const { text, userName, userImg, userId, timestamp, _id } = data;
  const showBtn = userId === loginUserId;
  const date = dateFormat(timestamp);

  return (
    <div className="flex items-center justify-between  relative">
      <div className="flex gap-3 w-full">
        <VideoCommentsUsers userName={userName} userImg={userImg} />

        {/* UI based on userInput will be inputed or not */}
        {edit ? (
          <VideoCommentsEditInput
            setEdit={setEdit}
            text={text}
            videoId={videoId}
            commentId={_id}
            fetchVideoData={fetchVideoData}
          />
        ) : (
          <div>
            <p className="space-x-2">
              <span className="font-semibold text-base">{userName}</span>
              <span className="text-xs text-slate-400">{date}</span>
            </p>
            <p>{text}</p>
          </div>
        )}
      </div>
      {showBtn && (
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="text-lg hover:bg-slate-300 p-1 rounded-full"
        >
          <IoMdMore />
        </button>
      )}
      {showMore && (
        <VideoCommentsEdit
          setShowMore={setShowMore}
          setEdit={setEdit}
          videoId={videoId}
          commentId={_id}
          fetchVideoData={fetchVideoData}
        />
      )}
    </div>
  );
}

//Prop Validation

VideoCommentsInfo.propTypes = {
  data: PropTypes.object,
  videoId: PropTypes.string,
  fetchVideoData: PropTypes.func,
};

export default VideoCommentsInfo;
