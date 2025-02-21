import { useState } from "react";
import InputField from "./InputField";
import LoginBtn from "./LoginBtn";
import PasswordInput from "./PasswordInput";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

function SubmitForm({ setLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);

      //checking avatar
      if (!avatar.startsWith("http") && avatar !== "") {
        toast.error("Invalid image url");
        return;
      }

      //creating new user
      const newUser = { userName, password, email, avatar };
      const res = await fetch(
        "https://watchly-backend-1.onrender.com/user/register",
        {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();

      //Checking result
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        setTimeout(() => {
          setLogin(true);
        }, 2000);
      }
    } catch (err) {
      console.log(err.message);
      toast.error("Something is broken!!!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white shadow-lg w-[90%] xs:w-[80%] sm:w-[65%] md:w-[55%] lg:w-[40%] xl:w-[35%] gap-4 px-8 py-6 xl:py-8 xl:px-14 rounded-2xl"
    >
      <p className="text-center font-bold text-2xl sm:text-3xl mb-6">Sign Up</p>

      <InputField
        type="text"
        placeholder="Username"
        setFunc={setUserName}
        value={userName}
      />
      <InputField
        type="email"
        placeholder="Email"
        setFunc={setEmail}
        value={email}
      />
      <PasswordInput setPassword={setPassword} value={password} />
      <InputField
        type="text"
        placeholder="Profile Image Url (Optional)"
        priority={false}
        setFunc={setAvatar}
        value={avatar}
      />
      <LoginBtn name="Sign Up" loading={isLoading} message="Signing up..." />
      <div className="flex justify-center gap-1.5">
        <p>Already have an account?</p>
        <button
          onClick={() => setLogin(true)}
          className="text-sky-700 font-semibold"
          type="button"
        >
          Log In
        </button>
      </div>
    </form>
  );
}

//prop validation

SubmitForm.propTypes = {
  setLogin: PropTypes.func,
};

export default SubmitForm;
