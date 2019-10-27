import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from "./components/Navbar";
import Carousel from './components/Carousel';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {
    return (
      <>
      <Navigation />
      <div className="App">
        <Route exact path='/' component={Header}/>
        <Route exact path='/'className='carousel' component={Carousel} />
        <Route exact path='/contact' component={Contact} />
      </div>
      <Footer />
      </>
    );
  }

  export default App;