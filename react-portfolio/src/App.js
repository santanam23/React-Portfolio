import React from 'react';
import Home from './components/Home';
import About from './components/About'
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Project from './components/Project';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <main>
        <Home />
        <About/>
        <ContactForm />
        <Project />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}


export default App;
