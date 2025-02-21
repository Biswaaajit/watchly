import PropTypes from "prop-types";
import { useRef, useState } from "react";

function DemoVideoStyle({ videoUrl, thumbnailUrl }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  function playVideo() {
    setPlay(true);
    videoRef.current.play();
  }

  function pauseVideo() {
    setPlay(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset video
  }

  return (
    <div
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      className="relative max-w-[32vw] xs:max-w-[10rem] sm:max-w-[12rem] xl:max-w-[8rem]  rounded-lg overflow-hidden"
    >
      <video
        ref={videoRef}
        loop
        muted
        className="w-full aspect-video object-cover"
      >
        <source src={videoUrl} />
      </video>

      <img
        src={thumbnailUrl}
        className={`w-full aspect-video object-cover absolute top-0 transition-opacity duration-300 ${
          play ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

// Prop validation
DemoVideoStyle.propTypes = {
  videoUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};

export default DemoVideoStyle;
