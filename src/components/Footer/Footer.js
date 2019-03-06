import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'reactstrap';
import { StyledLink2 } from '../StyledComponents/StyledComponents'; 
import logo from '../../images/logo_temp.png';
import { Colors } from '../../modules/colors';

const StyledFooterContainer = styled.div`
    height: 8rem;
    padding-top: 2rem;
    border-top: 1.5px solid #ccc;
`;

const StyledFooterLogo = styled.img`
    display: inline-block;
    max-width: 100px;
    `;
const StyledFooterLink = styled(StyledLink2)`
    font-size: 1.2rem;
    color: ${Colors.text};
    &:hover {
        color: #aaaaaa;
    }
`;
const Footer = (props) => (
    <Row>
        <Col>
            <StyledFooterContainer className="container">
                <Row>
                    <Col xs={12} sm={6} className="text-left">
                        <StyledFooterLogo src={logo} /> @All rights reserved, 2017-2019</Col>
                    <Col xs={12} sm={6} className="text-right">
                        <StyledFooterLink href="https://medium.com/met3r" >
                            <FontAwesomeIcon icon={['fab', 'medium']} size="lg" />
                        </StyledFooterLink>
                        <StyledFooterLink href="https://www.linkedin.com/company/27102755/" >
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" className="ml-3 ml-sm-5"/>
                        </StyledFooterLink>
                    </Col>
                </Row>
            </StyledFooterContainer>
        </Col>
        
    </Row>
);
export default Footer;