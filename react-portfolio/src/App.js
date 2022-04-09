import React from 'react';
import About from './components/About'
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Nav/>
        <About/>
        <ContactForm />
        <Project />
      </main>
      <Footer />
    </div>
  );
}


export default App;
