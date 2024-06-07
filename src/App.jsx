import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import TourPage from "./pages/TourPage";
import TestimoniPage from "./pages/TestimoniPage";

// Components
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import CreateTour from "./pages/CreateTour";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createtour" element={<CreateTour />} />
        <Route path="/tour/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
