import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/Banner.css";
import { ImageUrl, TrendingURL } from "../../Urls/URL";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(TrendingURL).then((res) => setMovie(res.data.results[2]));
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          movie ? ImageUrl + movie.backdrop_path : null
        })`,
      }}
    >
      <div className="banner-content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
