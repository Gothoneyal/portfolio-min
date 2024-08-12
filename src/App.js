import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/intro/intro';
import Skills from './Components/Skills/skills';
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Footer from './Components/Footer/footer';
import Admin from './Components/Admin/admin';
import Projects from './Components/Projects/Projects';
import SignUpSignIn from './Components/Auth/SignUpSignIn'; // New component
import { auth } from './firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={
                <>
                  <NavBar />
                  <Intro />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                  <Footer />
                </>
              } />
              <Route path="/admin" element={<Admin />} />
            </>
          ) : (
            <Route path="/" element={<SignUpSignIn />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
