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
// import ProductDetails from "./pages/ProductDetails";
import ProductDetailsWrapper from "./components/wrapper/ProductDetailsWrapper";
import BookTourWrapper from "./components/wrapper/bookTour";

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
        <Route path="/book-tour/:id" element={<BookTourWrapper />} />
        <Route path="/tour/details/:id" element={<ProductDetailsWrapper />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
