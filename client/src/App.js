import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages & components
import Home from "./pages/Home";

export default function App() {
  return (
    <Router basename="/rainmap">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
