import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Map from "./pages/Map";
import About from "./pages/About";
import Account from "./pages/Account";
import Upload from "./pages/Upload";
import Contact from "./pages/Contact";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export const Page = (props) => (
  <>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div className="flex flex-col h-screen">
      <Navbar />
      <section className="flex flex-col grow justify-center">
        {props.children}
      </section>
      <Footer />
    </div>
  </>
);

export const Container = (props) => (
  <div className="flex flex-col rounded border border-gray-200 p-6 w-[448px] gap-6">
    {props.children}
  </div>
);