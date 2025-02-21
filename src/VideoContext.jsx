import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const VideoContext = createContext();

function VideoProvider({ children }) {
  const [videoData, setVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch video data
  async function fetchVideoData() {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("https://watchly-backend-1.onrender.com/videos/");
      if (!res.ok) throw new Error("Failed to fetch videos");
      const data = await res.json();
      setVideoData(data);
    } catch (err) {
      console.error("Error fetching video data:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <VideoContext.Provider
      value={{ videoData, setVideoData, fetchVideoData, isLoading, error }}
    >
      {children}
    </VideoContext.Provider>
  );
}

// Prop validation
VideoProvider.propTypes = {
  children: PropTypes.node,
};

export { VideoContext, VideoProvider };
