import React, { useState, useEffect } from "react";
import axios from "axios";
import "./gallery.css";

const Gallery = () => {
  // create a state for the API call
  const [data, setData] = useState([]);
  // const [img, setImg] = useState("");
  data.length = 6;

  // fetch and Mount the API
  useEffect(async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/photos");
    setData(result.data);
  }, []);

  // function that will load more images when the button is clicked
  const handleClick = () => {};

  return (
    <>
      <div className="gallery">
        {/* mapping through the data in the API to render in the Img */}
        {data.map((item) => (
          <img className="gallery__img" src={item.url} alt="" key={item.id} />
        ))}
      </div>
      <div className="btn__section">
        <center>
          <button onClick={handleClick} className="gallery__btn">
            Load more
          </button>
        </center>
      </div>
    </>
  );
};

export default Gallery;
