import PropTypes from "prop-types";

function HomeChannelLogo({ channelBanner, width, height }) {
  return (
    <img
      src={channelBanner}
      alt="Channel Logo"
      className={`${width} ${height} aspect-square object-cover rounded-full`}
    />
  );
}

// Prop Validation
HomeChannelLogo.propTypes = {
  channelBanner: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default HomeChannelLogo;
