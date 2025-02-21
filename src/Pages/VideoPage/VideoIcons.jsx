import PropTypes from "prop-types";
import HomeChannelLogo from "../HomePage/HomeChannelLogo";
import VideoLikesAndDisLike from "./VideoLikesAndDisLike";
import { RiDownloadLine, RiShareForwardLine } from "react-icons/ri";
import Icon from "../../components/Icon";

function VideoIcons({ data }) {
  const { likes, dislikes, channelSubscribers, channelBanner, channelName } =
    data;
  return (
    <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row justify-between">
      <div className="flex items-center gap-3">
        {channelBanner ? (
          <HomeChannelLogo
            width="w-[2.5rem]"
            height="h-[2.5rem]"
            channelBanner={channelBanner}
          />
        ) : (
          <div className="bg-orange-500 text-white capitalize w-10 h-10 flex justify-center items-center rounded-full text-3xl">
            <p>{channelName[0]}</p>
          </div>
        )}
        <div className="">
          <p className="font-semibold text-lg">{channelName}</p>
          <p className="text-sm text-slate-500">
            {channelSubscribers} subscribers
          </p>
        </div>
        <button
          className="bg-black hover:bg-black/90 text-slate-100 px-4 py-1.5 ml-8
         rounded-full font-semibold"
        >
          Subscribe
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        <VideoLikesAndDisLike likes={likes} dislikes={dislikes} />
        <Icon name="share">
          <RiShareForwardLine />
        </Icon>
        <Icon name="downlode">
          <RiDownloadLine />
        </Icon>
      </div>
    </div>
  );
}

// Prop Validation
VideoIcons.propTypes = {
  data: PropTypes.object,
};

export default VideoIcons;
