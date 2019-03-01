import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { StyledHeader2 } from '../StyledComponents/StyledComponents';

const h2 = 'Get in touch to know more or request a demo';
const email = 'info@met3r.com';
const signup = 'Sign up to our newsletter';

class Contact extends Component {
  
    submitHandler = (e) => {
        e.preventDefault();
        console.log('Subscribe to Mailchimp form');
    }
    render() {
        return (
            <Row className="Contact">
                <div className="imageRightHolder"></div>
                <Col xs={12} sm={{size: 6}}>
                    <StyledHeader2>{h2}</StyledHeader2>
                    <p>{email}</p>
                    <form className="subscription-form" method="POST" action="php/subscribe.php">
                        <input type="email" name="email" className="form-control" id="subscribe-input" placeholder={signup} />
                        <button type="submit" onClick={this.submitHandler}>Subscribe</button>
                    </form>      
                </Col>
            </Row>
        );
    }
}

export default Contact;