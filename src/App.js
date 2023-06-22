import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
// import Home from "./pages/home";
import Employers from "./pages/employers";
// import Universities from "./pages/universities";
// import Candidates from "./pages/candidates";
import NotFound from "./pages/notFound";
// import Footer from "./components/layout/footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/timetable" element={<Employers />} />
          <Route path="/notes" element={<Universities />} />
          <Route path="/read" element={<Candidates />} /> */}
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Employers year="fe" />} />
          <Route
            path="/admin/*"
            element={<Employers year="fe" editabel={true} />}
          />
          <Route path="/se" element={<Employers year="se" />} />
          <Route
            path="/se/admin/*"
            element={<Employers year="se" editabel={true} />}
          />
          <Route path="/te" element={<Employers year="te" />} />
          <Route
            path="/te/admin/*"
            element={<Employers year="te" editabel={true} />}
          />
          <Route path="/be" element={<Employers year="be" />} />
          <Route
            path="/be/admin/*"
            element={<Employers year="be" editabel={true} />}
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
