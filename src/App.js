import {
  Route, Routes
} from "react-router-dom";


import React from "react";
import Timeline from "./Timeline";
import Home from "./Home";
import Intermediate from "./Intermediate";

const App = () => {
  return (
    <Routes>
      <Route path='/timeline' element={<Timeline/>} />
      <Route path='/intermediate' element={<Intermediate/>} />
      <Route path='/' element={<Home/>} />
    </Routes>

  );
}

export default App;
