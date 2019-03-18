import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { device } from '../../modules/devices';
import { Texts } from '../../modules/texts';
import styled from 'styled-components';
import { StyledHeader2, StyledButton1, StyledInput, StyledContactIcon, StyledIcon } from '../StyledComponents/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubscribeButton = styled(StyledButton1)`
    padding: 0.375rem 0.75rem;
    margin-top: 1.5rem;
    @media ${device.lg} {
        width: 30%;;
    }
`;
class Contact extends Component {
    render() {
        return (
            <Row className="Contact">
                <Col>
                    <div className="container py-5">
                        <Col xs={12} md={{size: 8}} lg={6} className="py-5">
                            <StyledHeader2>{Texts.contact.header}</StyledHeader2>
                            <p>{Texts.contact.email}</p>
                                <StyledContactIcon href={`mailto:${Texts.contact.email}`}>
                                    <FontAwesomeIcon icon={['fas', 'paper-plane']} size="lg" className="ml-3 ml-sm-5"/>
                                </StyledContactIcon>
                                <StyledContactIcon href={Texts.contact.linkedin} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" className="ml-3 ml-sm-5"/>
                                </StyledContactIcon>
                            <form className="subscription-form text-center text-md-left" method="POST" action="/subscribe">
                                <StyledInput type="email" name="email" id="subscribe-input" placeholder={Texts.contact.signupText} />
                                <SubscribeButton type="submit">Subscribe</SubscribeButton>
                            </form>      
                        </Col>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Contact;