
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../../modules/devices';
import { Texts } from '../../modules/texts';
import { StyledHeader2, StyledLink1 } from '../StyledComponents/StyledComponents';
import BlueLineSVG from '../../images/blue-line.svg';
import Art5Image from '../../images/art5@2x.png';

const StyledMainRow = styled(Row)`
  min-height: ${window.innerWidth < 1024 ? '500px' : '600px'};
`;
const StyledImage1 = styled.div`
    width: ${window.innerWidth < 1024 ? '20rem' : '30rem'};
    height: ${window.innerWidth < 1024 ? '20rem' : '30rem'};
    max-width: 100%;
    background-image: ${`url('${Art5Image}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-left: 0;
    @media ${device.md} {
      margin-left: 0;
      position: absolute;
      top: 0%;
      left: 0%;
    }
`;

class ZenFleetComponent extends Component {
  
  render() {
    const props = this.props;
    return (
      <StyledMainRow id="zenfleet" className="ZenFleetComponent align-items-md-center">
        <Col xs={{size: 12, order: 2}} md={{size: 6, order:  2}} className="align-self-start py-5 py-md-0 h-100">
          <StyledImage1 ></StyledImage1>
       </Col>
      <Col xs={{size: 12, order: 1}} md={{size: 6, order:1}} className="pl-4 py-5 py-md-0">
          <StyledHeader2>{Texts.fleet.header}</StyledHeader2>
          <p>{Texts.fleet.p}</p>
          <StyledLink1 href="/zenfleet">
                <object id="blue-line" data={BlueLineSVG} type="image/svg+xml" className="w-25">
                  <img src={BlueLineSVG} />
                </object>
              {` Learn more`}</StyledLink1>
      </Col>
    </StyledMainRow>

    );
  }
}

export default ZenFleetComponent;
