import VideoIcons from "./VideoIcons";
import VideoDescription from "./VideoDescription";
import VideoComments from "./VideoComments";
import DemoVideos from "./DemoVideos";
import { demoData } from "../../utils/data";
import PropTypes from "prop-types";

function VideoData({ data, fetchVideoData }) {
  const { videoUrl, title, comments, _id } = data;
  return (
    <>
      <div className="w-full xl:grow space-y-2">
        <iframe
          className="aspect-video w-full rounded-xl"
          src={`${videoUrl}?autoplay=1`}
          allow="autoplay; encrypted-media; fullscreen"
        ></iframe>
        <div className="space-y-3">
          <p className="text-2xl font-semibold">{title}</p>
          <VideoIcons data={data} />
          <VideoDescription data={data} />
        </div>
        <div className="block xl:hidden transition-all">
          {demoData.map((data) => (
            <DemoVideos key={data.id} data={data} />
          ))}
        </div>
        <VideoComments
          comments={comments}
          videoId={_id}
          fetchVideoData={fetchVideoData}
        />
      </div>
      <div className="w-full xl:w-fit  h-fit hidden xl:block  transition-all">
        {demoData.map((data) => (
          <DemoVideos key={data.id} data={data} viewStyle="largeWindow" />
        ))}
      </div>
    </>
  );
}

// Prop validation
VideoData.propTypes = {
  data: PropTypes.object,
  fetchVideoData: PropTypes.func,
};

export default VideoData;
