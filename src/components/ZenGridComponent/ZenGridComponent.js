import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { StyledHeader2 } from '../StyledComponents/StyledComponents';

const h2 = 'The EVolution is here. Increase grid resilience';
const p = 'Our turn-key demand-response solution centrally manages residential EV charging points according to grid conditions. ZenCharge assists DSOs, utilities and grid managers to meet the e-mobility challenge by reducing investment need and cutting operational costs. ';

class ZenGridComponent extends Component {
  
  render() {
    const props = this.props;
    return (
        <Row className="ZenGridComponent">
            <div className="imageLeft1Holder"></div>
            <div className="imageLeft2Holder"></div>
            <Col xs={12} sm={{size: 6, offset: 6}}>
                <StyledHeader2>{h2}</StyledHeader2>
                <p>{p}</p>
                <a href="/zengrid">Learn more</a>
            </Col>
        </Row>

    );
  }
}

export default ZenGridComponent;
