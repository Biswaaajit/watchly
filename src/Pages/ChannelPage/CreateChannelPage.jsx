import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import ChannelForm from "./ChannelForm";
import PropTypes from "prop-types";

function CreateChannelPage({ fetchChannelData }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {showForm ? (
        <ChannelForm
          setShowForm={setShowForm}
          fetchChannelData={fetchChannelData}
        />
      ) : (
        <div className=" absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <p className="text-[4vw] lg:text-[3vw] font-semibold">
            You donot have a channel
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center bg-slate-500/80 hover:bg-slate-500 text-white py-1.5 px-4 rounded-lg gap-1 font-semibold transition-all"
          >
            <FaPlus />
            <p>Create channel</p>
          </button>
        </div>
      )}
    </div>
  );
}

//Prop Validation
CreateChannelPage.propTypes = {
  fetchChannelData: PropTypes.func,
};

export default CreateChannelPage;
