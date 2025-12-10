import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/LandingPage/Landing";
import Signup from './components/SignUP/signup';


const App = () => {
  return (
   <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
  );
};


export default App
