import React, { useEffect, useState } from "react";
import "../../Styles/Banner.css";
import axios from "axios";
import { API_KEY, BaseUrl, ImageUrl } from "../../Urls/URL";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const randomIndx = Math.floor(Math.random() * 30);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setMovie(res.data.results[randomIndx]);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          movie
            ? ImageUrl + movie.backdrop_path
            : "https://wallpapercave.com/wp/wp1917131.jpg"
        })`,
      }}
    >
      <div className="banner-content">
        <h1 className="movie-title">
          {movie ? movie.original_title : "DareDevil"}
        </h1>
        <p className="description">
          {movie
            ? movie.overview
            : "Daredevil is a 2003 American superhero film written and directed by Mark Steven Johnson, based on the Marvel Comics character of the same name created by Stan Lee and Bill Everett. The film stars Ben Affleck as Matt Murdock, a blind lawyer who fights for justice in the courtroom and on the streets of New York as the masked vigilante Daredevil. Jennifer Garner plays his love interest Elektra Natchios; Colin Farrell plays the merciless assassin Bullseye; David Keith plays Jack The Devil Murdock, a washed up fighter and Matt's father; and Michael Clarke Duncan plays Wilson Fisk, the crime lord also known as the Kingpin."}
        </p>
      </div>
    </div>
  );
};

export default Banner;
