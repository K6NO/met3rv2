import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import JumbotronComponent from './components/JumbotronComponent/JumbotronComponent';
import PartnersComponent from './components/PartnersComponent/PartnersComponent';
import ZenGridComponent from './components/ZenGridComponent/ZenGridComponent';
import ZenFleetComponent from './components/ZenFleetComponent/ZenFleetComponent';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LandingBackground from './components/LandingBackground/LandingBackground';

import './App.css';

class App extends Component {
  
  render() {
    const props = this.props;
    return (
        <div className="App">
        <LandingBackground />
          <header className="container">
          <Navigation />
          </header>
          <section className="container">
              <JumbotronComponent {...props} />
              <PartnersComponent {...props} />
              <ZenGridComponent {...props} />
              <ZenFleetComponent {...props} />
          </section>

          <section className="container-fluid">
            <Contact />
          </section>
          <footer className="container">
            <Footer />
          </footer>
        </div>

    );
  }
}

export default App;
