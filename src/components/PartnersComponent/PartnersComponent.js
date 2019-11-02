import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Colors } from '../../modules/colors';
import { device } from '../../modules/devices';
import CKICLogo from '../../images/logo-climate-kic.png';
import HiventuresLogo from '../../images/logo-hiventures.jpg';
import MentonLogo from '../../images/logo-menton.png';
import PpisLogo from '../../images/logo-ppis.png';
import BlueprintLogo from '../../images/logo-blueprint.png';
import NkmLogo from '../../images/logo-nkm.png';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import Art2Image from '../../images/art2@2x.png';

const UtilityImage = styled.div`
    position: absolute;
    z-index: 1;
    top: 35%;
    height: 22rem;
    width: 22rem; 
    background-image: ${`url('${Art2Image}')`};
    background-size: contain;
    background-position: center;
    margin-left: auto;
    @media ${device.xl} {
        margin-left: 0;
    }
`;

const StyledRow = styled(Row)`
    height: 55vh;
    @media ${device.md} {
        height: 40vh;
    }
    @media ${device.lg} {
        height: 56vh;
    }
    
`;
const StyledHeader = styled.h4`
    font-size: 1.6rem;
    padding: 2rem 0;
    color: ${Colors.lightText};
    @media ${device.lg} {
        padding: 3rem 0;
    }
`;

const partnerText = 'Our partners';
const supporterText = 'Our supporters';
const partnerBox = [
    {   altText: 'Blueprint Energy', src: `${BlueprintLogo}`},
    {   altText: 'Menton Energy Group', src: `${MentonLogo}`},
    {   altText: 'Pannon Pro Innovations', src: `${PpisLogo}`},

];
const supporterBox = [
    {   altText: 'Climate KIC', src: `${CKICLogo}`},
    {   altText: 'Hiventures Venture Capital Fund', src: `${HiventuresLogo}`},
    {   altText: 'Nemzeti Kozmuvek - National Utilities', src: `${NkmLogo}`},
];
class PartnersComponent extends Component {
  
  render() {
    const props = this.props;
    return (
        <StyledRow className="align-content-end text-center">
            <Col style={{height: '100%'}} xs={12} md={{size: 6}} lg={{size: 6}}>
            {window.innerWidth < 1024  
                ? '' 
                : <UtilityImage />
                }
            </Col>
            <Col className={'mt-auto'} xs={12} md={{size: 3}} lg={{size: 3}}>
                <StyledHeader>{partnerText}</StyledHeader>
                <CarouselComponent items={partnerBox}/>
            </Col>
            <Col className={'mt-auto'} xs={12} md={3} lg={3}>
                <StyledHeader>{supporterText}</StyledHeader>
                <CarouselComponent items={supporterBox}/>
            </Col>
        </StyledRow>
    );
  }
}

export default PartnersComponent;
