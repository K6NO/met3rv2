import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextAnimationWrapper from '../TextAnimationComponent/TextAnimationWrapper';
import { device } from '../../modules/devices';
import { Texts } from '../../modules/texts';
import { StyledHeader1, StyledButtonLink } from '../StyledComponents/StyledComponents';
import styled from 'styled-components';
import WhiteImage from '../../images/art1.png';

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
    position: absolute;
    background-image: ${`url('${WhiteImage}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: auto;
    @media ${device.md} {
      width: 30rem;
      height: 22.1rem;
      top: 30%;
      left: -275%;
      margin-left: 0;
    }
    @media ${device.lg} {
      left: -10%;
      top: 20%;
      left: -35%;
      width: 40rem;
      height: 29.6rem;
      margin-left: 0;
    }
`;

const StyledJumbotron = styled(Row)`
  height: ${`${window.innerHeight * .55}px`};
  height: 55vh;
`;

const StyledHeader = styled(StyledHeader1)`
  display: inline;
`;

class JumbotronComponent extends Component {

  render() {

    return (
        <StyledJumbotron>
          <Col xs={12} className="text-left d-flex align-items-sm-center">
              <Col  xs={12} md={10} lg={6}>
                <StyledZenCharge>{Texts.jumbo.title}</StyledZenCharge>
                <StyledHeader>{Texts.jumbo.heading}</StyledHeader>
                <TextAnimationWrapper />
                <StyledButtonLink href="#zengrid" className="mt-4">Learn More</StyledButtonLink>
              </Col>
              {window.innerWidth < 768  
                ? '' 
                : 
                <Col xs={12} md={2} lg={6} className="h-100">
                  <JumboImage1 className="JumboImage1"></JumboImage1>
                  </Col>
                }
          </Col>
        </StyledJumbotron>

    );
  }
}

export default JumbotronComponent;
