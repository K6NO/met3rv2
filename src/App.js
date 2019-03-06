import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import JumbotronComponent from './components/JumbotronComponent/JumbotronComponent';
import PartnersComponent from './components/PartnersComponent/PartnersComponent';
import ZenGridComponent from './components/ZenGridComponent/ZenGridComponent';
import ZenFleetComponent from './components/ZenFleetComponent/ZenFleetComponent';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LandingBackground from './components/LandingBackground/LandingBackground';
import { StyledContainer, StyledFluidContainer } from './components/StyledComponents/StyledComponents';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faBars } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(fab, faCheckSquare, faBars);

// Kicks off the process of finding <i> tags and replacing with <svg>
// dom.watch();


/** Initialise font awesome icons. Need to import and add them explicitly to the library
 * so that it is available as 'FontAwesomeIcon' import in all components
 * https://github.com/FortAwesome/react-fontawesome#basic
 */
// console.log(faCheckSquare, faBars, faMedium, faLinkedin)

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

          <StyledFluidContainer id="contact">
            <Contact />
          </StyledFluidContainer>
          <StyledFluidContainer id="footer">
            <Footer />
          </StyledFluidContainer>
        </div>

    );
  }
}

export default App;
