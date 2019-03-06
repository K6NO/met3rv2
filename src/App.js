import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faBars } from '@fortawesome/free-solid-svg-icons';
import Navigation from './components/Navigation/Navigation';
import JumbotronComponent from './components/JumbotronComponent/JumbotronComponent';
import PartnersComponent from './components/PartnersComponent/PartnersComponent';
import ZenGridComponent from './components/ZenGridComponent/ZenGridComponent';
import ZenFleetComponent from './components/ZenFleetComponent/ZenFleetComponent';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LandingBackground from './components/LandingBackground/LandingBackground';
import { StyledContainer } from './components/StyledComponents/StyledComponents';


import './App.css';

/** Initialise font awesome icons. Need to import and add them explicitly to the library
 * so that it is available as 'FontAwesomeIcon' import in all components
 * https://github.com/FortAwesome/react-fontawesome#basic
 */
library.add(faCheckSquare, faBars)

class App extends Component {
  
  render() {
    const props = this.props;
    return (
        <div className="App">
          <LandingBackground />
          <StyledContainer className="px-0">
            <Navigation />
          </StyledContainer>
          <StyledContainer >
              <JumbotronComponent {...props} />
              {window.innerWidth > 480 
                ? <PartnersComponent {...props} /> 
                : ''}
          </StyledContainer>
          <StyledContainer>
            <ZenGridComponent {...props} />
            <ZenFleetComponent {...props} />
          </StyledContainer>

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
