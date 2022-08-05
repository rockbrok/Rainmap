import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Map from "./pages/Map";
import About from "./pages/About";
import Account from "./pages/Account";
import Upload from "./pages/Upload";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router basename="/rainmap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export const Page = (props) => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <section className="flex flex-col grow justify-center">
      {props.children}
    </section>
    <Footer />
  </div>
);
