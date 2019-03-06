import React, { Component } from 'react';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faBars } from '@fortawesome/free-solid-svg-icons';
import Navigation from './components/Navigation/Navigation';
import LandingPage from './pages/LandingPage/LandingPage';
import FeaturePage from './pages/FeaturePage/FeaturePage';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { StyledContainer, StyledFluidContainer } from './components/StyledComponents/StyledComponents';


import './App.css';

/** Initialise font awesome icons. Need to import and add them explicitly to the library
 * so that it is available as 'FontAwesomeIcon' import in all components
 * https://github.com/FortAwesome/react-fontawesome#basic
 */
library.add(fab, faCheckSquare, faBars);

class App extends Component {
  
  render() {
    const props = this.props;
    return (
        <div className="App">
          <StyledContainer className="px-0">
            <Navigation />
          </StyledContainer>
          {/* <LandingPage props={props} /> */}
          <FeaturePage props={props} />
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
