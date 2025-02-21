import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import PropTypes from "prop-types";
import numberFormat from "../../utils/numberFormat";

function VideoLikesAndDisLike({ likes, dislikes }) {
  const modifiedLikes = numberFormat(likes);
  const modifiedDislikes = numberFormat(dislikes);
  return (
    <div className="flex divide-x-2 divide-slate-300 bg-slate-200/70 w-fit  rounded-full overflow-hidden">
      <button className="flex items-center gap-1 active:bg-black active:text-white font-semibold px-3 py-1 pr-3">
        <AiOutlineLike className="text-xl" />
        <span>{modifiedLikes}</span>
      </button>
      <button className="flex items-center font-semibold active:bg-black active:text-white gap-1 pl-3 px-3 py-1">
        <AiOutlineDislike className="text-xl" />
        <span>{modifiedDislikes}</span>
      </button>
    </div>
  );
}

//Prop Validation
VideoLikesAndDisLike.propTypes = {
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

export default VideoLikesAndDisLike;
