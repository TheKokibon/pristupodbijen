import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
