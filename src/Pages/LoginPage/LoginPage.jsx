import { useState } from "react";
import LoginForm from "./LoginForm";
import SubmitForm from "./SubmitForm";

function LoginPage() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <div className="w-full h-screen bg-slate-200  flex justify-center items-center">
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <SubmitForm setLogin={setLogin} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
