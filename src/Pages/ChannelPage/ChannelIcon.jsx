import PropTypes from "prop-types";

function ChannelIcon({ channelBanner, channelName }) {
  if (channelBanner) {
    return (
      <img
        src={channelBanner}
        className="w-[16vw] h-[16vw] md:w-[14vw] md:h-[14vw] lg:w-[12vw] lg:h-[12vw] xl:w-[9vw] xl:h-[9vw]  object-cover rounded-full"
      />
    );
  }
  return (
    <div className="w-[17vw] h-[17vw] xs:w-[6rem] xs:h-[6rem] md:w-[14vw] md:h-[14vw] lg:w-[12vw] lg:h-[12vw] xl:w-[9vw] xl:h-[9vw] bg-orange-500 text-[12vw] xs:text-6xl font-semibold rounded-full flex justify-center items-center text-white">
      <span className="capitalize">{channelName[0]}</span>
    </div>
  );
}

//Prop Validation
ChannelIcon.propTypes = {
  channelBanner: PropTypes.string,
  channelName: PropTypes.string,
};
export default ChannelIcon;
