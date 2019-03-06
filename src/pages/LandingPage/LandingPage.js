import React from 'react';
import JumbotronComponent from '../../components/JumbotronComponent/JumbotronComponent';
import PartnersComponent from '../../components/PartnersComponent/PartnersComponent';
import ZenGridComponent from '../../components/ZenGridComponent/ZenGridComponent';
import ZenFleetComponent from '../../components/ZenFleetComponent/ZenFleetComponent';
import LandingBackground from '../../components/LandingBackground/LandingBackground';
import { StyledContainer, StyledFluidContainer } from '../../components/StyledComponents/StyledComponents';

const LandingPage = (props) => (
    <div id="landingPage">
        <LandingBackground />
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
    </div>
);
  
export default LandingPage;