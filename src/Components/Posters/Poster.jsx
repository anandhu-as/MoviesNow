import React, { useEffect, useState } from "react";
import "../../Styles/Poster.css";
import axios from "axios";
import {  ImageUrl, Orginals, TrendingURL, romance } from "../../Urls/URL";
const Poster = ({type,title}) => {
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    axios.get(type === 'a' ? Orginals : type === 'b' ? romance : TrendingURL).then((res) => setPoster(res.data.results));
  }, []);
  return (
    <div className="poster">
      <h3 className="type">{title}</h3>
      <div className="posters">
        {poster.map((data) => {
          return (
            <>
              <div>
                <img
                  className="post"
                  src={ImageUrl + data.poster_path}
                  alt=""
                />
                <p className="poster-title">
                  {data.title ? data.title : "DareDevil"}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Poster;
