import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import ChannelVideoCard from "./ChannelVideoCard";

function ChannelVideos() {
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(null);
  const [videoData, setVideoData] = useState(null);

  const { loginUserId } = useContext(UserContext);
  const token = localStorage.getItem("token");

  // callback function
  const fetchVideo = useCallback(
    async function () {
      try {
        setVideoLoading(true);
        const res = await fetch(
          `https://watchly-backend-1.onrender.com/videos/userId/${loginUserId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `JWT ${token}`,
            },
          }
        );
        const data = await res.json();
        if (!res.ok) {
          setVideoError(data);
          setVideoData(null);
        } else {
          setVideoData(data);
          setVideoError(null);
        }
      } catch (err) {
        setVideoError(err);
        setVideoData(null);
      } finally {
        setVideoLoading(false);
      }
    },
    [loginUserId, token]
  );
  useEffect(() => {
    fetchVideo();
  }, [fetchVideo]);

  // loading return
  if (videoLoading)
    return (
      <div className="text-center text-2xl font-semibold border-t-2 pt-24">
        <p className="animate-bounce">Fetching...</p>
      </div>
    );

  //Error Return
  if (videoError)
    return (
      <div className="text-center text-2xl font-semibold border-t-2 pt-24">
        Unable to fetch data
      </div>
    );

  //data return
  return (
    <div className="divide-y-2">
      <p className="font-semibold text-lg px-3 pb-1">Video</p>
      {videoData.length === 0 ? (
        <p className="text-center text-2xl font-semibold border-t-2 py-12">
          You have no videos
        </p>
      ) : (
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center transition-all gap-y-10">
          {videoData.map((data) => (
            <ChannelVideoCard
              key={data._id}
              data={data}
              fetchVideo={fetchVideo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ChannelVideos;
