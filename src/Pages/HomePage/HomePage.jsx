import HomeVideo from "./HomeVideo";
import Spinner from "../../components/Spinner";
import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../../VideoContext";
import HomeFilterBtn from "./HomeFilterBtn";

function HomePage() {
  const { videoData, isLoading, error } = useContext(VideoContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let newData = videoData;
    if (filter === "nature") {
      newData = newData.filter((eachData) =>
        eachData.categories.includes("nature")
      );
    }
    if (filter === "movies") {
      newData = newData.filter((eachData) =>
        eachData.categories.includes("movies")
      );
    }
    if (filter === "gaming") {
      newData = newData.filter((eachData) =>
        eachData.categories.includes("gaming")
      );
    }
    setData(newData);
  }, [videoData, filter]);

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading videos: {error}</p>;

  return (
    <div className=" flex flex-col w-full px-4 pb-4 relative">
      <div className="flex flex-wrap w-full py-4 bg-white gap-5 fixed z-20 ">
        <HomeFilterBtn filter={filter} name="all" setFilter={setFilter} />
        <HomeFilterBtn filter={filter} name="nature" setFilter={setFilter} />
        <HomeFilterBtn filter={filter} name="movies" setFilter={setFilter} />
        <HomeFilterBtn filter={filter} name="gaming" setFilter={setFilter} />
      </div>
      <div className="grow mt-10  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  place-items-center  py-10 px-1 pb-20 gap-y-8 gap-x-4 transition-all">
        {data.map((data) => (
          <HomeVideo key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
