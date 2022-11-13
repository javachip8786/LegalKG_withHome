import {
  Route, Routes
} from "react-router-dom";


import React from "react";
import Timeline from "./Timeline";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path='/timeline' element={<Timeline/>} />
      <Route path='/' element={<Home/>} />
    </Routes>

  );
}

export default App;
