import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { device } from '../../modules/devices';
import styled from 'styled-components';
import { StyledHeader2, StyledButton1, StyledInput } from '../StyledComponents/StyledComponents';

const h2 = 'Get in touch to know more or request a demo';
const email = 'info@met3r.com';
const signup = 'Sign up to our newsletter';

const SubscribeButton = styled(StyledButton1)`
    padding: 0.375rem 0.75rem;
    margin-top: 1.5rem;
    @media ${device.lg} {
        width: 30%;;
    }
`;


class Contact extends Component {
  
    submitHandler = (e) => {
        e.preventDefault();
        console.log('Subscribe to Mailchimp form');
    }
    render() {
        return (
            <Row className="Contact">
                <Col>
                    <div className="container py-5">
                        <Col xs={12} md={{size: 8}} lg={6} className="py-5">
                            <StyledHeader2>{h2}</StyledHeader2>
                            <p>{email}</p>
                            <form className="subscription-form text-center text-md-left" method="POST" action="php/subscribe.php">
                                <StyledInput type="email" name="email" id="subscribe-input" placeholder={signup} />
                                <SubscribeButton type="submit" onClick={this.submitHandler}>Subscribe</SubscribeButton>
                            </form>      
                        </Col>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Contact;