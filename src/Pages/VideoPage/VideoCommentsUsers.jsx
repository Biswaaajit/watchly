import PropTypes from "prop-types";

function VideoCommentsUsers({ userName, userImg }) {
  return (
    <div className="w-fit">
      {userImg ? (
        <img
          className="rounded-full aspect-square object-cover w-[2.7rem]"
          src={userImg}
        />
      ) : (
        <div className="bg-orange-500 text-white capitalize w-[2.7rem] h-[2.7rem] flex justify-center items-center rounded-full text-2xl">
          <p>{userName[0]}</p>
        </div>
      )}
    </div>
  );
}

//Prop Validation
VideoCommentsUsers.propTypes = {
  userName: PropTypes.string,
  userImg: PropTypes.string,
};

export default VideoCommentsUsers;
