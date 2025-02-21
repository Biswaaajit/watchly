import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

function ChannelDeleteBtn({ fetchVideo, videoId }) {
  const token = localStorage.getItem("token");
  async function handleDelete() {
    try {
      const res = await fetch(
        `https://watchly-backend-1.onrender.com/videos/${videoId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${token}`,
          },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        setTimeout(() => {
          fetchVideo();
        }, 1000);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }
  return (
    <button
      onClick={handleDelete}
      className="bg-white font-semibold absolute -top-14 right-4 px-4 py-2 flex items-center gap-1.5 rounded-xl shadow-[0px_0px_10px_3px] shadow-slate-600"
    >
      <AiOutlineDelete className="text-2xl " />
      <span>Delete</span>
    </button>
  );
}

//Prop vaalidation
ChannelDeleteBtn.propTypes = {
  fetchVideo: PropTypes.func,
  videoId: PropTypes.any,
};

export default ChannelDeleteBtn;
