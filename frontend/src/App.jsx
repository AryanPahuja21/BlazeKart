import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Authentication/Login"));
const Signup = lazy(() => import("./pages/Authentication/Signup"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Categories = lazy(() => import("./pages/Categories/Categories"));
const Deals = lazy(() => import("./pages/Deals/Deals"));
const Category = lazy(() => import("./pages/Category/Category"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const AdminLogin = lazy(() =>
  import("./pages/Admin/Authentication/AdminLogin")
);
const AdminSignup = lazy(() =>
  import("./pages/Admin/Authentication/AdminSignup")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Home />}>
            <Route path="login" element={<AdminLogin />} />
            <Route path="signup" element={<AdminSignup />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedRoute isAuthenticated={user} />}>
            {/* TODO: Add Toasts */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/deals" element={<Deals />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
