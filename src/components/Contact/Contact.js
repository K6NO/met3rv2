import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { StyledHeader2, StyledButton1, StyledInput } from '../StyledComponents/StyledComponents';

const h2 = 'Get in touch to know more or request a demo';
const email = 'info@met3r.com';
const signup = 'Sign up to our newsletter';

const SubscribeButton = styled(StyledButton1)`
    width: 30%;
    padding: 0.375rem 0.75rem;  
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
                        <Col xs={12} md={{size: 6}} className="py-5">
                            <StyledHeader2>{h2}</StyledHeader2>
                            <p>{email}</p>
                            <form className="subscription-form" method="POST" action="php/subscribe.php">
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