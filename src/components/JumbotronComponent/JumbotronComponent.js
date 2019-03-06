import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextAnimationWrapper from '../TextAnimationComponent/TextAnimationWrapper';
import { StyledHeader1 } from '../StyledComponents/StyledComponents';
import styled from 'styled-components';

const title = 'MET3R ZenCharge';
const h1 = ' residential charging network.';

const StyledJumbotron = styled(Row)`
  height: ${window.innerHeight * .8};
  height: 80vh;
`;

class JumbotronComponent extends Component {
  
  render() {

    return (
        <StyledJumbotron>
          <Col xs={12} className="text-left d-flex align-items-center">
              <Col xs={12} lg={8}>
                <TextAnimationWrapper />
                <StyledHeader1>{h1}</StyledHeader1>
              </Col>
              <div className="imageRight1Holder"></div>
              <div className="imageRight2Holder"></div>
          </Col>
        </StyledJumbotron>

    );
  }
}

export default JumbotronComponent;
