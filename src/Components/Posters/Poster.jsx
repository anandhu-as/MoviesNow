import React, { useEffect, useState } from "react";
import "../../Styles/Poster.css";
import axios from "axios";
import { ImageUrl, TrendingURL } from "../../Urls/URL";
const Poster = () => {
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    axios.get(TrendingURL).then((res) => setPoster(res.data.results));
  }, []);
  return (
    <div className="poster">
      <h3 className="type">Popular</h3>
      <div className="posters">
        {poster.map((image) => {
          return (
            <img className="post" src={ImageUrl + image.poster_path} alt="" />
          );
        })}
      </div>
    </div>
  );
};

export default Poster;
