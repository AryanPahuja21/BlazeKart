import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/Explore/Explore"));
const Contact = lazy(() => import("./pages/Cart/Cart"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<About />} />
        <Route path="/cart" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
