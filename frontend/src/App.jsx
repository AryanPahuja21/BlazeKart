import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Checkout from "./pages/Checkout/Checkout";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/Explore/Explore"));
const Contact = lazy(() => import("./pages/Cart/Cart"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<About />} />
          <Route path="/cart" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
