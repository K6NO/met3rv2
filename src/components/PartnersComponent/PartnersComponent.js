import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Colors } from '../../modules/colors';
import { device } from '../../modules/devices';
import CKICLogo from '../../images/logo-climate-kic.svg';
import CarouselComponent from '../CarouselComponent/CarouselComponent';

const UtilityImage = styled.div`
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
    {   altText: 'Climate KIC', src: `${CKICLogo}`},
    {   altText: 'Fasza', src: 'https://via.placeholder.com/100x100'},
    {   altText: 'Distributed', src: 'https://via.placeholder.com/100x100'},

];
const supporterBox = [
    {   altText: 'Lajos', src: `${CKICLogo}`},
    {   altText: 'Lorinc', src: 'https://via.placeholder.com/100x100'},
    {   altText: 'Gyuri', src: 'https://via.placeholder.com/100x100'},

];
class PartnersComponent extends Component {
  
  render() {
    const props = this.props;
    return (
        <StyledRow className="align-content-end text-center">
            <Col xs={12} md={{size: 6}} lg={{size: 6}}>
                <UtilityImage />
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
