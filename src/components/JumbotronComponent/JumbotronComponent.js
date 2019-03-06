import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextAnimationWrapper from '../TextAnimationComponent/TextAnimationWrapper';
import { device } from '../../modules/devices';
import { StyledHeader1, StyledButton2 } from '../StyledComponents/StyledComponents';
import styled from 'styled-components';

const title = 'MET3R ZenCharge';
const h1 = ' EV charging network.';

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
          <Col xs={12} className="text-left d-flex align-items-center">
              <Col xs={12} lg={8}>
                <TextAnimationWrapper />
                <StyledHeader1>{h1}</StyledHeader1>
                <StyledButton2 className="mt-4">Learn More</StyledButton2>
              </Col>
              <Col xs={12} lg={4}>
              {window.innerWidth > 768 
                ? '' 
                : <JumboImage1 className="imageRight1Holder"></JumboImage1>
                }
                
              </Col>
          </Col>
        </StyledJumbotron>

    );
  }
}

export default JumbotronComponent;
