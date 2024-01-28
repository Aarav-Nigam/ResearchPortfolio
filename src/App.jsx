import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ResearchPaper from './components/ResearchPaper';

function App() {
  return (
    <Router>
       <div className="App d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Navbar />
        <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<ResearchPaper/>} />
          <Route path="/ad" element={<ResearchPaper/>} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
