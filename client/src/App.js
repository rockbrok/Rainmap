import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
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
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export const Page = (props) => (
  <>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div className="flex flex-col h-screen mx-[16px] sm:mx-[16px] md:mx-[32px]">
      <Navbar />
      <section className="flex flex-col grow justify-center">
        {props.children}
      </section>
      <Footer />
    </div>
  </>
);

export const Section = (props) => (
  <section className="flex flex-col items-center">
    <div className="flex flex-col gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
      {props.children}
    </div>
  </section>
);

export const Container = (props) => (
  <div className="flex flex-col md:rounded md:border md:border-gray-200 p-6 w-full md:w-[448px] gap-3">
    {props.children}
  </div>
);

export const H2 = (props) => (
  <h2
    className="text-xl mb-6 text-center"
    style={{ marginBottom: props.margin }}
  >
    {props.name}
  </h2>
);
