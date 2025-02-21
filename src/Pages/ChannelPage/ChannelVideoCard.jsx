import PropTypes from "prop-types";
import HomeVideoCard from "../HomePage/HomeVideoCard";
import { IoMdMore } from "react-icons/io";
import dateFormat from "../../utils/dateFormat";
import numberFormat from "../../utils/numberFormat";
import { LuDot } from "react-icons/lu";
import { useState } from "react";
import ChannelDeleteBtn from "./ChannelDeleteBtn";

function ChannelVideoCard({ data, fetchVideo }) {
  const { videoUrl, thumbnailUrl, title, views, uploadDate, _id } = data;
  const [show, setShow] = useState(false);
  const videoDate = dateFormat(uploadDate);
  const videoViews = numberFormat(views);

  return (
    <div className="w-fit space-y-1">
      <HomeVideoCard
        videoId={_id}
        videoUrl={videoUrl}
        thumbnailUrl={thumbnailUrl}
        width="w-[70vw] xs:w-[22rem] sm:w-[24rem] md:w-[20rem] lg:w-[22rem]"
      />
      <div className="px-1 space-y-1 relative">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">{title}</p>
          {show && <ChannelDeleteBtn videoId={_id} fetchVideo={fetchVideo} />}
          <button
            onClick={() => setShow((prev) => !prev)}
            className="hover:bg-slate-200/50 p-1 rounded-full"
          >
            <IoMdMore className="text-lg" />
          </button>
        </div>
        <div className="flex items-center text-sm text-slate-500">
          <p>{videoDate}</p>
          <LuDot className="text-xl" />
          <p>{videoViews} views</p>
        </div>
      </div>
    </div>
  );
}

//Prop Validation
ChannelVideoCard.propTypes = {
  data: PropTypes.object,
  fetchVideo: PropTypes.func,
};

export default ChannelVideoCard;
