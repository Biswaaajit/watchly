import ChannelIcon from "./ChannelIcon";
import PropTypes from "prop-types";
import numberFormat from "../../utils/numberFormat";

function ChannelInfo({ channelData }) {
  const { channelBanner, channelName, description, ownerEmail, subscribers } =
    channelData;
  const modifiedSubscribers = numberFormat(subscribers);
  return (
    <div className="px-5 pt-6 space-y-7 lg:space-y-12">
      <img
        className="w-full h-[15vh] md:h-[20vh] xl:h-[30vh] object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1597259058442-f107bcb02fc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex gap-3 xl:gap-5 text-xs lg:text-base  items-center py-0 lg:py-4 ">
        <ChannelIcon channelBanner={channelBanner} channelName={channelName} />
        <div className="text-slate-600 space-y-0.5">
          <p className="text-3xl md:text-4xl font-semibold text-black">
            {channelName}
          </p>
          <p>{ownerEmail}</p>
          <p>{modifiedSubscribers} subscribers</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

//Prop validation
ChannelInfo.propTypes = {
  channelData: PropTypes.object,
};

export default ChannelInfo;
