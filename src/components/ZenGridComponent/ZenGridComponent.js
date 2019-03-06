import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../../modules/devices';
import { Texts } from '../../modules/texts';
import { StyledHeader2, StyledLink1 } from '../StyledComponents/StyledComponents';
import BlueLineSVG from '../../images/blue-line.svg';

const StyledMainRow = styled(Row)`
  min-height: ${window.innerWidth < 1024 ? '500px' : '600px'};
`;
const StyledImage1 = styled.div`
    width: ${window.innerWidth < 1024 ? '18rem' : '30rem'};
    height: ${window.innerWidth < 1024 ? '25rem' : '35rem'};
    background-image: url('https://via.placeholder.com/200x200');
    background-size: contain;
    background-position: center;
    margin-left: 0;
    @media ${device.xl} {
        margin-left: 0;
    }
`;

class ZenGridComponent extends Component {
  
  render() {
    const props = this.props;
    return (
        <StyledMainRow className="ZenGridComponent align-items-md-center">
          <Col xs={{size: 12, order: 2}} md={{size: 6, order: 1}} 
            className="align-self-start pl-4 pl-md-0 py-5 py-md-0">
            <StyledImage1 className="imageLeft1Holder"></StyledImage1>
           </Col>
          <Col xs={{size: 12, order: 1}} md={{size: 6, order:2}} className="pl-4 pl-md-0 py-5 py-md-0">
              <StyledHeader2>{Texts.grid.header}</StyledHeader2>
              <p>{Texts.grid.p}</p>
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
