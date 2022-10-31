import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import News from "./pages/News";
import Jobs from "./pages/Jobs"
import About from "./pages/About"
import Contact from "./pages/Contact"



function App() {

   

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
