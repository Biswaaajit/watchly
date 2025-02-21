import { BsDot } from "react-icons/bs";
import dateFormat from "../../utils/dateFormat";
import numberFormat from "../../utils/numberFormat";
import DemoVideoStyle from "./DemoVideoStyle";
import PropTypes from "prop-types";

function DemoVideos({ data }) {
  const { videoUrl, thumbnailUrl, title, channelName, views, uploadData } =
    data;
  const modifiedDate = dateFormat(uploadData);
  const modifiesViews = numberFormat(views);
  return (
    <div className="flex  items-center gap-[4vw] xs:gap-2 sm:gap-3  py-2 px-0.5 xl:px-3 ">
      <DemoVideoStyle videoUrl={videoUrl} thumbnailUrl={thumbnailUrl} />
      <div className=" space-y-0 xs:space-y-0.5">
        <p className="text-[3.2vw] leading-5 xs:leading-none xs:text-base sm:text-lg xl:text-sm font-semibold">
          {title}
        </p>
        <p className="text-slate-400 text-[3vw] xs:text-sm sm:text-base xl:text-xs">
          {channelName}
        </p>
        <div className="flex items-center gap-[1vw] xs:gap-1 text-[3vw] xs:text-sm sm:text-base xl:text-xs text-slate-400">
          <p>{modifiesViews} views</p>
          <BsDot />
          <p>{modifiedDate}</p>
        </div>
      </div>
    </div>
  );
}

//Prop validation
DemoVideos.propTypes = {
  data: PropTypes.object,
};

export default DemoVideos;
