import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import ChannelErrorPage from "./ChannelErrorPage";
import ChannelInfo from "./ChannelInfo";
import ChannelVideos from "./ChannelVideos";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

function ChannelPage() {
  const [channelData, setChannelData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { loginEmail } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  //fetching channel info
  const fetchChannelData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://watchly-backend-1.onrender.com/channel/email",
        {
          method: "POST",
          body: JSON.stringify({ email: loginEmail }),
          headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${token}`,
          },
        }
      );
      const data = await res.json();

      if (!res.ok) {
        setError(data);
        setChannelData(null);
      } else {
        setChannelData(data);
        setError(null);
      }
    } catch (err) {
      setError(err);
      setChannelData(null);
    } finally {
      setLoading(false);
    }
  }, [loginEmail, token]);

  useEffect(() => {
    fetchChannelData();
  }, [fetchChannelData]);

  if (!token || !loginEmail) {
    navigate("/");
  }

  if (isLoading) return <Spinner />;
  if (error) {
    return (
      <ChannelErrorPage error={error} fetchChannelData={fetchChannelData} />
    );
  }
  return (
    <div className="w-full space-y-8">
      <ChannelInfo channelData={channelData} />
      <ChannelVideos />
    </div>
  );
}

export default ChannelPage;
