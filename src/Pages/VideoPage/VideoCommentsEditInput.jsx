import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

function VideoCommentsEditInput({
  setEdit,
  text,
  videoId,
  commentId,
  fetchVideoData,
}) {
  const [editedText, setEditedText] = useState(text);
  const [showEditBtn, setShowEditBtn] = useState(false);
  const token = localStorage.getItem("token");

  async function handleEditComment(e) {
    e.preventDefault();
    if (editedText === "") {
      toast.error("Cannot leave empty comment");
      return;
    }
    try {
      const res = await fetch(
        "https://watchly-backend-1.onrender.com/videos/addComment",
        {
          method: "PUT",
          body: JSON.stringify({ videoId, commentId, text: editedText }),
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
        setEdit(false);
        toast.success("Edited the comment");
        setTimeout(() => {
          fetchVideoData();
        }, 1000);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  }

  return (
    <form onSubmit={handleEditComment} className="flex flex-col w-full gap-4 ">
      <input
        onFocus={() => setShowEditBtn(true)}
        onChange={(e) => setEditedText(e.target.value)}
        type="text"
        value={editedText}
        placeholder="Add a comment..."
        className="focus:outline-none border-b border-slate-300 w-full pb-1 pl-2"
      />
      {showEditBtn && (
        <div className="flex justify-end gap-3 font-semibold">
          <button
            onClick={() => setEdit(false)}
            type="button"
            className="px-4 py-0.5 rounded-lg hover:bg-black/50 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-sky-300 hover:bg-sky-600 px-4 py-0.5 rounded-lg text-white transition-all"
          >
            Edit
          </button>
        </div>
      )}
    </form>
  );
}

//Prop Validation

VideoCommentsEditInput.propTypes = {
  setEdit: PropTypes.func,
  text: PropTypes.string,
  videoId: PropTypes.string,
  commentId: PropTypes.string,
  fetchVideoData: PropTypes.func,
};

export default VideoCommentsEditInput;
