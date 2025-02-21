import CreateChannelPage from "./CreateChannelPage";
import SessionExpiredPage from "./SessionExpiredPage";
import PropTypes from "prop-types";

function ChannelErrorPage({ error, fetchChannelData }) {
  const { statusCode } = error;
  return (
    <div className="">
      {statusCode === 400 ? (
        <SessionExpiredPage />
      ) : statusCode === 404 ? (
        <CreateChannelPage fetchChannelData={fetchChannelData} />
      ) : (
        <p>Error</p>
      )}
    </div>
  );
}

ChannelErrorPage.propTypes = {
  error: PropTypes.object,
  fetchChannelData: PropTypes.func,
};

export default ChannelErrorPage;
