import PropTypes from "prop-types";
import VideoAddCmmts from "./VideoAddCmmts";
import VideoCommentsInfo from "./VideoCommentsInfo";

function VideoComments({ comments, videoId, fetchVideoData }) {
  const cmmts =
    comments.length === 0 ? "No Comments" : `${comments.length} Comments`;

  return (
    <div className="w-full space-y-6">
      <p className="font-bold text-lg">{cmmts}</p>
      <VideoAddCmmts videoId={videoId} fetchVideoData={fetchVideoData} />
      <div className="flex flex-col gap-6">
        {comments.map((comment) => (
          <VideoCommentsInfo
            key={comment._id}
            data={comment}
            videoId={videoId}
            fetchVideoData={fetchVideoData}
          />
        ))}
      </div>
    </div>
  );
}

//Prop Validation
VideoComments.propTypes = {
  comments: PropTypes.array,
  videoId: PropTypes.string,
  fetchVideoData: PropTypes.func,
};

export default VideoComments;
