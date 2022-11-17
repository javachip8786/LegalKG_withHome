import {
  Route, Routes
} from "react-router-dom";


import React from "react";
import TimelineSec3 from "./timeline_sec3";
import TimelineSec4 from "./timeline_sec4";
import Home from "./Home";
import Intermediate from "./Intermediate";
import Chapters from "./Chapters";
const App = () => {
  return (
    <Routes>
      <Route path='/Chapters' element={<Chapters/>}/>
      <Route path='/timeline_sec3' element={<TimelineSec3/>} />
      <Route path='/timeline_sec4' element={<TimelineSec4/>} />
      <Route path='/intermediate' element={<Intermediate/>} />
      <Route path='/' element={<Home/>} />
    </Routes>

  );
}

export default App;
