import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import { Texts } from '../../modules/texts';
import { device } from '../../modules/devices';
import { Colors } from '../../modules/colors';
import FeatureBackground from '../../components/FeatureBackground/FeatureBackground';
import { StyledContainer, StyledHeader1, StyledHeader2 } from '../../components/StyledComponents/StyledComponents';

const StyledJumbotron = styled(Row)`
  height: ${`${window.innerHeight * .8}px`};
  padding: 3rem 1rem;
  background: #2D38C3;
  @media ${device.lg} {
    height: ${`${window.innerHeight * .6}px`};
    padding: 6rem 0;
  }
`;

const StyledFeatureHeader = styled(StyledHeader2)`
    text-align: ${props => props.i%2 === 0 ? 'right' : 'left'};
    font-size: 24px;
    font-size: 2.4rem;
    padding-top: 6rem;
    @media ${device.md} {
        font-size: 30px;
        font-size: 3rem;
        padding-top: 9rem;
    }
`;
const StyledHeaderText = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  font-size: 1.2rem;
`;
const StyledText = styled.p`
  text-align: ${props => props.i%2 === 0 ? 'right' : 'left'};
  padding-bottom: 3rem;
  @media ${device.md} {
    padding-bottom: 3rem;
  }
`;
const StyledLightText = styled.p`
  text-align: ${props => props.i%2 === 0 ? 'left' : 'right'};
  color: ${Colors.midText};
`;

const stylee = { 
  borderRight: '2px solid #ffffff',
  borderLeft: '2px solid #FFffff',
  backgroundImage: 'linear-gradient(to bottom, #2F3268, #2D38C3)',
  backgroundSize: '2px 100%',
  backgroundPosition:'0 100% 0 0',
  backgroundRepeat:'no-repeat'
}
// style={i%2 === 0 ? {borderRight: `2px solid ${Colors.gradientLine}`} : {borderLeft: `1px solid ${Colors.gradientLine}`}}>
// style={i%2 !== 0 ? {borderRight: `2px solid ${Colors.gradientLine}`} : {borderLeft: `1px solid ${Colors.gradientLine}`}}>

const FeaturePage = (props) => (
  <div id="FeaturePage">
    <FeatureBackground />
    <StyledJumbotron>
        <Col xs={12} sm={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} className="text-center">
            <StyledHeader1 className="pb-5 pb-md-4">{Texts.grid.header}</StyledHeader1>
            <StyledHeaderText>{Texts.grid.p}</StyledHeaderText>
        </Col>
    </StyledJumbotron>
    <StyledContainer >
        {Texts.grid.features.map((feature, i) => 
            <Row key={i}>
              <Col xs={12} 
                md={i%2 === 0 ? {size: 6, order: 1} : {size: 6, order: 2}}
                className="my-auto"
                style={i%2 !== 0 ? stylee : {}}>
                <StyledFeatureHeader i={i} className="pb-2 px-3">{feature.title}</StyledFeatureHeader>
                <StyledText className={`px-3 ${i%2 === 0 ? 'pl-md-0' : 'pr-md-0'}`} i={i}>{feature.p}</StyledText>
              </Col>
              <Col xs={12} 
                md={i%2 === 0 ? {size: 6, order: 2} : {size: 6, order: 1}}
                className="d-flex align-items-center"
                style={i%2 === 0 ? stylee : {}}>
                <StyledLightText i={i} className={`pb-5 pb-sm-0 px-3 ${i%2 === 0 ? 'pl-md-0' : 'pr-md-0'}`}>
                  {feature.alt}
                </StyledLightText>
              </Col>
            </Row>)}
    </StyledContainer>
  </div>
);
  
export default FeaturePage;