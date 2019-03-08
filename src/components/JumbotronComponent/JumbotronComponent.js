import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextAnimationWrapper from '../TextAnimationComponent/TextAnimationWrapper';
import { device } from '../../modules/devices';
import { Texts } from '../../modules/texts';
import { StyledHeader1, StyledButton2, StyledButtonLink } from '../StyledComponents/StyledComponents';
import styled from 'styled-components';

const StyledZenCharge = styled(StyledHeader1)`
  font-family: 'GaoelM3TER';
  font-size: 24px;  
  font-size: 2.4rem;
  padding-bottom: 2rem;
  @media ${device.md} {
    font-size: 30px;
    font-size: 3rem;
  }
`;

const JumboImage1 = styled.div`
    height: 20rem;
    width: 20rem;    
    background-image: url('https://via.placeholder.com/200x200');
    background-size: contain;
    background-position: center;
    margin-left: auto;
    @media ${device.xl} {
        margin-left: 0;
    }
`;

const StyledJumbotron = styled(Row)`
  height: ${`${window.innerHeight * .55}px`};
  height: 55vh;
`;

class JumbotronComponent extends Component {

  render() {

    return (
        <StyledJumbotron>
          <Col xs={12} className="text-left d-flex align-items-baseline align-items-sm-center">
              <Col xs={12} lg={8}>
                <StyledZenCharge>{Texts.jumbo.title}</StyledZenCharge>
                <TextAnimationWrapper />
                <StyledHeader1>{Texts.jumbo.heading}</StyledHeader1>
                <StyledButtonLink href="#zengrid" className="mt-4">Learn More</StyledButtonLink>
              </Col>
              <Col xs={12} lg={4}>
              {window.innerWidth < 1024  
                ? '' 
                : <JumboImage1 className="JumboImage1"></JumboImage1>
                }
                
              </Col>
          </Col>
        </StyledJumbotron>

    );
  }
}

export default JumbotronComponent;
