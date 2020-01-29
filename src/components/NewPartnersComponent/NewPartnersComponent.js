import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../../modules/devices';
import CKICLogo from '../../images/logo-climate-kic.png';
import HiventuresLogo from '../../images/logo-hiventures.jpg';
import PpisLogo from '../../images/logo-ppis.png';
import NkmLogo from '../../images/logo-nkm.png';
import MvmLogo from '../../images/logo_mvm.png';
import EUWLogo from '../../images/logo_EUW.png';
import WSLogo from '../../images/logo_WS_alpha.png';
import CarouselComponent from '../CarouselComponent/CarouselComponent';


const partnerText = 'Our partners';
const supporterText = 'Our supporters';
const partnerBox = [
    {   altText: 'MVM Group', src: `${MvmLogo}`, url: 'http://mvm.hu/?lang=en'},
    {   altText: 'NKM - National Utilities', src: `${NkmLogo}`, url: 'https://www.nemzetikozmuvek.hu/'},
    {   altText: 'Pannon Pro Innovations', src: `${PpisLogo}`, url: 'https://ppis.hu/'},

];
const supporterBox = [
    {   altText: 'Climate-KIC', src: `${CKICLogo}`, url: 'https://www.climate-kic.org/'},
    {   altText: 'Hiventures Venture Capital Fund', src: `${HiventuresLogo}`, url: 'http://hiventures.hu/'},
    {   altText: 'European Utility Week', src: `${EUWLogo}`, url: 'https://www.european-utility-week.com'},
    {   altText: 'Web Summit Alpha', src: `${WSLogo}`, url: 'https://websummit.com/'},
];

const StyledRow = styled(Row)`
    text-align: center;
    .subtitle {
    font-size: .8rem;
    text-transform: uppercase;
    margin-top: 2rem;
    
  }
`;
const StyledHeader = styled.h4`
    padding: 2rem 0;
    text-align: left;
    background-image: linear-gradient(to right,#2F3268,#2D38C3);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 2rem;
    margin-top: 5rem;
    @media ${device.lg} {
        padding: 3rem 0;
    }
`;

const StyledLogo = styled.img`
  max-width: 150px;
  max-height: 60px;
`;


const NewPartnersComponent = () => {
    
        return (
            <StyledRow className="Partners">
                <Col xs={12}>
                    <StyledHeader>{partnerText}</StyledHeader>
                </Col>
                {partnerBox.map(item => <Col>
                    <a href={item.url} alt={item.altText}>
                        <StyledLogo src={item.src} alt={item.altText} />
                    </a>
                    <p className="subtitle">{item.altText}</p>
                </Col>)}
                <Col xs={12}>
                <StyledHeader>{supporterText}</StyledHeader>
                </Col>
                {supporterBox.map(item => <Col>
                    <a href={item.url} alt={item.altText}>
                        <StyledLogo src={item.src} alt={item.altText} />
                    </a>
                    <p className="subtitle">{item.altText}</p>
                </Col>)}       
            </StyledRow>
        );
 
}
export default NewPartnersComponent;