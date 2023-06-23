import React from "react";
import Banner from "./Components/Banner/Banner";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar.jsx/Navbar";


const App = () => {
  return (
    <div>
         <Navbar/>
      <Routes>
        <Route path="/" Component={Banner} />
   
      </Routes>
   
    </div>
  );
};

export default App;
