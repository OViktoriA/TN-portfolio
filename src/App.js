import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './css/Home.css';
import './css/Night.css';
import './css/Resume.css';
import './css/Foto.css';
import './css/Video.css';
import './css/Design.css';
import './css/Unity.css';

import logo from './assets/Рисунок1.png';
import nlogo from './assets/Рисунок2.png';

import Header from "./components/Header";
import Home from "./pages/Home"; 
import Resume from "./pages/Resume"; 
import Foto from "./pages/Foto";
import Video from "./pages/Video";
import Design from "./pages/Design"
import Unity from "./pages/Unity";

export default function App() {
  const [theme, setTheme] = useState('day');

const toggleTheme = () => {
  const next = theme === 'day' ? 'night' : 'day';
  setTheme(next);
  document.body.style.background 
    = theme === 'day' 
      ? 'linear-gradient(180deg, #0f172a, #020617)' 
      : 'linear-gradient(180deg, #c9e9ff, #8fd0ff, #e9f6ff)';
  document.body.classList.toggle('night', next === 'night');
};


  return (
    <>
    <BrowserRouter> 
      <Header theme={theme} toggleTheme={toggleTheme} /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/foto" element={<Foto />} />
        <Route path="/video" element={<Video />} />
        <Route path="/design" element={<Design />} />
        <Route path="/unity" element={<Unity />} />
      </Routes> 
    </BrowserRouter>
    </>
  );
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}