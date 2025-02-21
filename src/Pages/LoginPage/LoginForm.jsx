import { useContext, useState } from "react";
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import LoginBtn from "./LoginBtn";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

function LoginForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  // UserContext data
  const { setLoginUser, setLoginEmail, setLoginUserImage, setLoginUserId } =
    useContext(UserContext);

  // function to handle login form
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const user = { email, password };
      setLoading(true);
      const res = await fetch(
        "https://watchly-backend-1.onrender.com/user/login",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        setLoginUser(data.userData.userName);
        setLoginEmail(data.userData.email);
        setLoginUserId(data.userData._id);
        setLoginUserImage(data.userData.avatar);
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          navigate("/");
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
      onSubmit={handleLogin}
      className="flex flex-col bg-white shadow-lg w-[90%] xs:w-[80%] sm:w-[65%] md:w-[55%] lg:w-[40%] xl:w-[35%] gap-4 px-8 py-6 xl:py-8 xl:px-14 rounded-2xl"
    >
      <p className="text-center font-bold text-2xl sm:text-3xl mb-6">Log In</p>
      <InputField
        type="email"
        placeholder="Email"
        setFunc={setEmail}
        value={email}
      />
      <PasswordInput setPassword={setPassword} value={password} />
      <LoginBtn name="Log In" loading={isLoading} message="Logging in..." />
      <div className="flex justify-center gap-1.5">
        <p>Donot have account yet?</p>
        <button
          onClick={() => setLogin(false)}
          className="text-sky-700 font-semibold"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

//Prop Validation
LoginForm.propTypes = {
  setLogin: PropTypes.func,
};

export default LoginForm;
