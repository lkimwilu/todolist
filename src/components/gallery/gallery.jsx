import React, { useEffect, useState } from "react";
import "./gallery.css";
import axios from "axios";
const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const fetchPhotos = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const data = response.data;

    setGallery(data);
  }

  useEffect(()=>{
    fetchPhotos()
  },[])

  return (
    <div>
      {gallery &&
        gallery.map((gal) => (
          <div key={gal.id}>
            <h1>{gal.title}</h1>
            <img src={gal.url} />
          </div>
        ))}
    </div>
  );
};

export default Gallery;
