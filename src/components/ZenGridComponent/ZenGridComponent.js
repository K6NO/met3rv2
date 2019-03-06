import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../../modules/devices';
import { StyledHeader2, StyledLink1 } from '../StyledComponents/StyledComponents';
import BlueLineSVG from '../../images/blue-line.svg';

const StyledMainRow = styled(Row)`
  height: ${`${window.innerHeight * .8}px`};
  height: 600px;
`;
const StyledImage1 = styled.div`
    width: 30rem;
    height: 35rem;
    background-image: url('https://via.placeholder.com/200x200');
    background-size: contain;
    background-position: center;
    margin-left: 0;
    @media ${device.xl} {
        margin-left: 0;
    }
`;
const h2 = 'The EVolution is here. Increase grid resilience';
const p = 'Our turn-key demand-response solution centrally manages residential EV charging points according to grid conditions. ZenCharge assists DSOs, utilities and grid managers to meet the e-mobility challenge by reducing investment need and cutting operational costs. ';

class ZenGridComponent extends Component {
  
  render() {
    const props = this.props;
    return (
        <StyledMainRow className="ZenGridComponent align-items-md-center">
          <Col xs={{size: 12, order: 2}} md={{size: 6, order: 1}} className="align-self-start">
            <StyledImage1 className="imageLeft1Holder"></StyledImage1>
           </Col>
          <Col xs={{size: 12, order: 1}} md={{size: 6, order:2}}>
              <StyledHeader2>{h2}</StyledHeader2>
              <p>{p}</p>
              <StyledLink1 href="/zengrid">
                <object id="blue-line" data={BlueLineSVG} type="image/svg+xml" className="w-25">
                  <img src={BlueLineSVG} />
                </object>
              {` Learn more`}</StyledLink1>
          </Col>
        </StyledMainRow>
    );
  }
}

export default ZenGridComponent;
