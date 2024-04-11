import logo from './logo.svg';
import './App.css';
import './style.css';
import Nav_Header from './Component/Nav_Header';



import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About_me from './Pages/About_me';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills/Skills';
import Footer from './Component/Footer';
import Aboutme2 from './Pages/Aboutme2/About';

function App() {
  return (
    
    <Router>
        <Nav_Header></Nav_Header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Skills" element={<Skills/>}/>
            <Route path="/About" element={<Aboutme2/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes> 
        <Footer></Footer>
    </Router>
     
  );
}

export default App;
