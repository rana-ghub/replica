import React from 'react';
import './components/fontAwesone/index';
import Navbar from './components/navbar';
import Ferofly from './components/ferofly';
import About from './components/About';
import Room from './components/Room';
import Services from './components/services';
import Gallery from './components/gallery';
import Things from './components/things';
import Grass from './components/review';
import Contact from './components/contact';
import SimpleMap from './components/maps';


function App() {
  return (
    <div>
      <Navbar />
      <Ferofly />
      <About />
      <Room />
      <Services />
      <Gallery />
      <Things />
      <Grass />
      <Contact />
      <SimpleMap />
    </div>
  );
}

export default App;
