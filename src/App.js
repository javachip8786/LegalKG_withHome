import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop2 from "./pages/Desktop2";
import { useEffect } from "react";
import TimelineSec3 from "./pages/timeline_sec3";
import TimelineSec4 from "./pages/timeline_sec4";
import Intermediate from "./pages/Intermediate";
import Chapters from "./pages/Chapters";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop2 />} />
      <Route path='/Chapters' element={<Chapters/>}/>
      <Route path='/timeline_sec3' element={<TimelineSec3/>} />
      <Route path='/timeline_sec4' element={<TimelineSec4/>} />
      <Route path='/intermediate' element={<Intermediate/>} />
    </Routes>
  );
}
export default App;
