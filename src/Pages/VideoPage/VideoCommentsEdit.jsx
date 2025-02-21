import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

function VideoCommentsEdit({
  setShowMore,
  setEdit,
  videoId,
  commentId,
  fetchVideoData,
}) {
  const token = localStorage.getItem("token");
  function handleEdit() {
    setEdit(true);
    setShowMore(false);
  }

  // function to dlt comment
  async function handleCommentDlt() {
    try {
      const res = await fetch(
        "https://watchly-backend-1.onrender.com/videos/deleteComment",
        {
          method: "DELETE",
          body: JSON.stringify({ videoId, commentId }),
          headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${token}`,
          },
        }
      );
      const resData = await res.json();
      if (!res.ok) {
        toast.error(resData.message);
      } else {
        toast.success("Deleted the comment");
        setTimeout(() => {
          fetchVideoData();
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }
  return (
    <div className="absolute flex flex-col -top-16 right-3 px-2 py-1 rounded-lg bg-white shadow-[0px_0px_5px_1px] shadow-slate-400">
      <button
        onClick={handleEdit}
        className="flex items-center px-3 py-1 rounded-md gap-2 hover:bg-slate-300 "
      >
        <FaRegEdit className="text-lg" />
        <span>Edit</span>
      </button>
      <button
        onClick={handleCommentDlt}
        className="flex items-center px-3 py-1 rounded-md gap-2  hover:bg-slate-300 "
      >
        <AiOutlineDelete className="text-lg" />
        <span>Delete</span>
      </button>
    </div>
  );
}

// Prop validation

VideoCommentsEdit.propTypes = {
  setShowMore: PropTypes.func,
  setEdit: PropTypes.func,
  videoId: PropTypes.string,
  commentId: PropTypes.string,
  fetchVideoData: PropTypes.func,
};

export default VideoCommentsEdit;
