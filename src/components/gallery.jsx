import React, { useState, useEffect } from "react";
import "./gallery.css";

function Gallery() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="gallery">
        {items.map((item) => (
          <img className="gallery__img" src={item.url} alt="" key={item.id} />
        ))}
        {/* <img src={items.url} alt="" /> */}
      </div>
    );
  }
}

export default Gallery;
