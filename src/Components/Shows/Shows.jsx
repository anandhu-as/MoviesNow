/* import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrendingURL } from "../../Urls/URL";

export const Shows = () => {
  const [show, setshow] = useState([]);
  useEffect(() => {
    axios.get(TrendingURL).then((response) => {
      setshow(response.data.results[1]);
      console.log(response);
    });
  }, []);
  return (
    <>
      <h1>{show.name}</h1>
      <img src={show.backdrop_path} alt="" />
    </>
  );
};
*/