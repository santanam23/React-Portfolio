import React from 'react';
import About from './components/About'
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Project from './components/Project';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <main>
        <Nav/>
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
