import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import Compassion from './components/Compassion';
import Change from './components/Change';
import Savelives from './components/Savelives';
import About from './components/About';
import Donate from './components/Donate';

export default function App() {
  return (
    <BrowserRouter>
       <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="compassion" element={<Compassion />} />
      <Route path="change" element={<Change />} />
      <Route path="savelives" element={<Savelives />} />
      <Route path="about" element={<About />} /> 
    <Route path="donate" element={<Donate />} /> 
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
