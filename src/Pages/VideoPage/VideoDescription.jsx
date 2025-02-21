import PropTypes from "prop-types";
import dateFormat from "../../utils/dateFormat";
import { useState } from "react";
import numberFormat from "../../utils/numberFormat";

function VideoDescription({ data }) {
  const [show, setShow] = useState(false);
  const { uploadDate, description, views } = data;
  const modifiedDate = dateFormat(uploadDate);
  const modifiedViews = numberFormat(views);

  return (
    <div className="bg-slate-200/90 px-2 py-3 rounded-2xl">
      <div className="space-x-2 font-semibold ">
        <span>{modifiedViews} views</span>
        <span>{modifiedDate}</span>
        <span className="uppercase text-slate-500">{description}</span>
      </div>
      <div className="">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius
          quae, dolorum voluptatibus ab assumenda ipsam, quasi corrupti
          architecto quo aspernatur culpa totam ut expedita esse consequuntur
        </span>
        {show && (
          <span>
            tempore animi quis. Recusandae, quos consequatur esse non ipsam
            distinctio ducimus quaerat nihil! Voluptates, quae! Odit nobis ea
            quibusdam repellat animi consectetur est illo facilis eius
            laboriosam dolorum iure ad, perferendis nemo possimus? Reiciendis
            impedit minus consequatur ipsa commodi. Dolor nulla, rem deleniti
            tempore voluptates dolorum quia eveniet quibusdam, illum aspernatur
            a iste officiis sunt magnam ex sapiente vel repellendus iure
            incidunt similique. Commodi qui enim quasi obcaecati et, pariatur
            voluptatibus tempore dolorem minima eius. Sit dignissimos asperiores
            maxime, quod assumenda aut iure harum earum neque
          </span>
        )}
        <button
          className={`font-semibold  ${show ? "block" : "ml-2"}`}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "show less" : "...show more"}
        </button>
      </div>
    </div>
  );
}

//Prop Validation
VideoDescription.propTypes = {
  data: PropTypes.object,
};

export default VideoDescription;
