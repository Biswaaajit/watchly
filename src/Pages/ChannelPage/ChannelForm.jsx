import { useContext, useState } from "react";
import InputField from "../LoginPage/InputField";
import { UserContext } from "../../UserContext";
import LoginBtn from "../LoginPage/LoginBtn";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

function ChannelForm({ setShowForm, fetchChannelData }) {
  const { loginEmail } = useContext(UserContext);
  const [channelName, setChannnelName] = useState("");
  const [channelBanner, setChannelBanner] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  //Form handling function
  async function handleForm(e) {
    e.preventDefault();
    try {
      setLoading(true);

      //checking channelBanner
      if (!channelBanner.startsWith("http") && channelBanner !== "") {
        toast.error("Invalid image url");
        return;
      }

      //Creating channel
      const newChannel = {
        channelName,
        ownerEmail: loginEmail,
        channelBanner,
        description,
      };
      const res = await fetch(
        "https://watchly-backend-1.onrender.com/channel/createChannel",
        {
          method: "POST",
          body: JSON.stringify(newChannel),
          headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${token}`,
          },
        }
      );
      const data = await res.json();

      //Checking result
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        fetchChannelData();
        setShowForm(false);
      }
    } catch (err) {
      console.log(err.message);
      toast.error("Something is broken!!!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="absolute w-full h-screen bg-slate-400/50 top-0 right-0 flex justify-center items-center">
      <form
        onSubmit={handleForm}
        className="flex relative flex-col bg-white shadow-lg w-[90%] xs:w-[80%] sm:w-[65%] md:w-[55%] lg:w-[40%] xl:w-[35%] gap-4 px-8 py-6 xl:py-8 xl:px-14 rounded-2xl"
      >
        <button
          onClick={() => setShowForm(false)}
          type="button"
          className="absolute right-5 top-4 text-lg"
        >
          <IoClose />
        </button>
        <p className="text-center font-bold text-2xl sm:text-3xl mb-6">
          Create Channel
        </p>
        <InputField
          type="text"
          placeholder="Channel name"
          setFunc={setChannnelName}
          value={channelName}
        />
        <InputField type="text" value={loginEmail} disabled={true} />
        <InputField
          type="text"
          placeholder="Channel image url (Optional)"
          setFunc={setChannelBanner}
          value={channelBanner}
          priority={false}
        />
        <InputField
          type="text"
          placeholder="Description (Optional)"
          setFunc={setDescription}
          value={description}
          priority={false}
        />
        <LoginBtn
          name="Create channel"
          loading={loading}
          message="Creating..."
        />
      </form>
    </div>
  );
}

//Prop Validation
ChannelForm.propTypes = {
  setShowForm: PropTypes.func,
  fetchChannelData: PropTypes.func,
};

export default ChannelForm;
