import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../../modules/devices';
import { Texts } from '../../modules/texts';
import { StyledHeader2, StyledLink1 } from '../StyledComponents/StyledComponents';
import BlueLineSVG from '../../images/blue-line.svg';
import Art4Image from '../../images/art4@2x.png';

const StyledMainRow = styled(Row)`
  /* min-height: ${window.innerWidth < 1024 ? '500px' : '600px'}; */
  margin: ${window.innerWidth < 576 ? '5rem auto;' : '10rem auto 5rem'};
`;
const StyledImage1 = styled.div`
    width: ${window.innerWidth < 1024 ? '20rem' : '30rem'};
    height: ${window.innerWidth < 1024 ? '20rem' : '30rem'};
    max-width: 100%;
    background-image: ${`url('${Art4Image}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-left: 0;
    @media ${device.md} {
      margin-left: 0;
      /* position: absolute; */
      top: 0%;
      left: 0%;
    }
`;

const ZenGridComponent = () => {
  
    return (
        <StyledMainRow id="zengrid" className="ZenGridComponent align-items-md-center">
          <Col xs={{size: 12, order: 2}} md={{size: 6, order: 1}} 
            className="align-self-start pl-4 pl-md-0 py-5 py-md-0 h-100">
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

export default ZenGridComponent;
