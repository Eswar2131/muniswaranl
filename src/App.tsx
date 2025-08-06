import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="pt-20 pb-20 md:pb-8">
          <Routes>
            <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
            <Route path="/about" element={<About setCurrentPage={setCurrentPage} />} />
            <Route path="/projects" element={<Projects setCurrentPage={setCurrentPage} />} />
            <Route path="/experience" element={<Experience setCurrentPage={setCurrentPage} />} />
            <Route path="/education" element={<Education setCurrentPage={setCurrentPage} />} />
            <Route path="/certificates" element={<Certificates setCurrentPage={setCurrentPage} />} />
            <Route path="/contact" element={<Contact setCurrentPage={setCurrentPage} />} />
          </Routes>
        </main>

        <MobileNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;