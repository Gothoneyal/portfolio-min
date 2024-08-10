import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/intro/intro';
import Skills from './Components/Skills/skills';
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Footer from './Components/Footer/footer';
import Admin from './Components/Admin/admin';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <Intro />
              <About />
              <Skills />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/admin" element={<Admin />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
