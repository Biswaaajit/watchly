import { useNavigate } from "react-router-dom";

function SessionExpiredPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <p className="text-[4vw] lg:text-[3vw] font-semibold">
          Your session expired!!
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-sky-600 text-white px-5 py-1.5 font-semibold rounded-xl"
        >
          Login again
        </button>
      </div>
    </div>
  );
}

export default SessionExpiredPage;
