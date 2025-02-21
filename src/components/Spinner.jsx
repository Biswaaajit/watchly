function Spinner() {
  return (
    <div>
      <div className="absolute right-0 top-0 h-screen w-full -z-10   flex flex-col justify-center items-center">
        <img
          src="/fevIcon.png"
          className="w-[25vw] xs:w-[8rem] animate-spin  opacity-60"
        />
      </div>
    </div>
  );
}

export default Spinner;
