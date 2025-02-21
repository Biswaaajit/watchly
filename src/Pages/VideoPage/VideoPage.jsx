import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

import { useCallback, useEffect, useState } from "react";
import VideoData from "./VideoData";

function VideoPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideoData = useCallback(
    async function () {
      try {
        setLoading(true);
        const res = await fetch(
          `https://watchly-backend-1.onrender.com/videos/${id}`
        );
        const resultData = await res.json();
        if (!res.ok) {
          setError(resultData.message);
          setData(null);
        } else {
          setData(resultData);
          setError(null);
        }
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    },
    [id]
  );

  useEffect(() => {
    fetchVideoData();
  }, [fetchVideoData]);

  if (isloading) return <Spinner />;
  if (error) return <p>{error?.message}</p>;

  return (
    <div className="w-full px-4 py-9   block xl:flex">
      <VideoData data={data} fetchVideoData={fetchVideoData} />
    </div>
  );
}

export default VideoPage;
