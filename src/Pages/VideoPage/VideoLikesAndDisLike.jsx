import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import PropTypes from "prop-types";

function VideoLikesAndDisLike({ likes, dislikes }) {
  const modifiedLikes = (likes / 1000).toFixed(1);
  const modifiedDislikes = (dislikes / 1000).toFixed(1);
  return (
    <div className="flex divide-x-2 divide-slate-300 bg-slate-200/70 w-fit px-3 py-1 rounded-full">
      <button className="flex items-center gap-1 font-semibold pr-3">
        <AiOutlineLike className="text-xl" />
        <span>{likes < 1000 ? likes : `${modifiedLikes}k`}</span>
      </button>
      <button className="flex items-center font-semibold gap-1 pl-3">
        <AiOutlineDislike className="text-xl" />
        <span>{dislikes < 1000 ? dislikes : `${modifiedDislikes}k`}</span>
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
