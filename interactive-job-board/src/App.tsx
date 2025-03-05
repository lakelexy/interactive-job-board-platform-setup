import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import "./styles/globals.css";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <JobProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </JobProvider>
  );
};

export default App;
