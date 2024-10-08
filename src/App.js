import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
