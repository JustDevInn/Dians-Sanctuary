import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Information from './components/Information';
import Rescues from './components/Rescues';

function App() {
  return (
   <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Information/>
   <Rescues/>
   </div>
  );
}

export default App;
