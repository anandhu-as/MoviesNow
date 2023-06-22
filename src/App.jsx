import React from "react";
import Navbar from "./Components/NavBar.jsx/Navbar";
import Banner from "./Components/Banner/Banner";
import Poster from "./Components/Posters/Poster";


const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Poster  type='a' title='popular' />
      <Poster  type='b' title='Trending'/>
      <Poster  type='c' title='action'/>
    </div>
  );
};

export default App;
