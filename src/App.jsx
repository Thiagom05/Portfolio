import React from 'react';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <SmoothScroll>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </SmoothScroll>
  );
}

export default App;
