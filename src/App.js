import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./pages/home";
import Employers from "./pages/employers";
import Universities from "./pages/universities";
import Candidates from "./pages/candidates";
import NotFound from "./pages/notFound";
import Footer from "./components/layout/footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-employers" element={<Employers />} />
          <Route path="/for-universities" element={<Universities />} />
          <Route path="/for-candidates" element={<Candidates />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
