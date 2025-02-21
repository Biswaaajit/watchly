import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeVideoCard({
  videoId,
  videoUrl,
  thumbnailUrl,
  width = "w-[22rem] xs:w-[25rem]",
}) {
  const [ishover, setHover] = useState(false);
  return (
    <Link
      to={`/videos/${videoId}`}
      className=" relative rounded-xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <iframe
        className={`aspect-video ${width} rounded-xl object-cover transition-all`}
        src={`${videoUrl}${ishover ? "?autoplay=1&mute=1" : ""}`}
        allow="autoplay; encrypted-media"
      ></iframe>
      <img
        src={thumbnailUrl}
        alt="Video thumbnail"
        className={`aspect-video absolute left-0 top-0 ${width} rounded-xl object-cover ${
          ishover ? "opacity-0" : "opacity-100"
        }`}
      />
    </Link>
  );
}

// Prop Validation
HomeVideoCard.propTypes = {
  videoUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  width: PropTypes.string,
  videoId: PropTypes.string,
};

export default HomeVideoCard;
