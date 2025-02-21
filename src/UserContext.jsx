import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserProvider({ children }) {
  const [loginUser, setLoginUser] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginUserImage, setLoginUserImage] = useState("");
  const [loginUserId, setLoginUserId] = useState("");

  function logOut() {
    setLoginEmail("");
    setLoginUser("");
    setLoginUserImage("");
    setLoginUserId("");
  }

  return (
    <UserContext.Provider
      value={{
        logOut,
        loginUser,
        loginEmail,
        loginUserId,
        loginUserImage,
        setLoginEmail,
        setLoginUser,
        setLoginUserId,
        setLoginUserImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

//Prop validation
UserProvider.propTypes = {
  children: PropTypes.node,
};

export { UserProvider, UserContext };
