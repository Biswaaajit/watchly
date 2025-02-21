import PropTypes from "prop-types";
import HomeVideoCard from "./HomeVideoCard";
import HomeChannelLogo from "./HomeChannelLogo";
import dateFormat from "../../utils/dateFormat";
import numberFormat from "../../utils/numberFormat";

function HomeVideo({ data }) {
  const {
    videoUrl,
    title,
    thumbnailUrl,
    views,
    uploadDate,
    channelName,
    channelBanner,
    _id,
  } = data;

  // fetching channel Info

  const newView = numberFormat(views);
  const formatDate = dateFormat(uploadDate);

  return (
    <div className="w-fit space-y-3">
      <HomeVideoCard
        videoId={_id}
        videoUrl={videoUrl}
        thumbnailUrl={thumbnailUrl}
      />
      <div className="flex items-start gap-4 ">
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

        <div>
          <p className="text-lg font-semibold capitalize">{title}</p>
          <p className="text-slate-400 font-medium">{channelName}</p>
          <div className="flex divide-x-2 text-slate-400">
            <p className="pr-2">{newView} views</p>
            <p className="pl-2">{formatDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//Prop Validation
HomeVideo.propTypes = {
  data: PropTypes.object,
};

export default HomeVideo;
