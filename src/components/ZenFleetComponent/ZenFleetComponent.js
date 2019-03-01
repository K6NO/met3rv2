
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { StyledHeader2 } from '../StyledComponents/StyledComponents';

const h2 = 'Outsource the charging infrastructure';
const p = 'With ZenCharge EV fleets can be home-charged conveniently with automatic clearing and settlement of the consumed energy.';

class ZenFleetComponent extends Component {
  
  render() {
    const props = this.props;
    return (
        <Row className="ZenFleetComponent">
            <div className="imageLeft1Holder"></div>
            <div className="imageLeft2Holder"></div>
            <Col xs={12} sm={{size: 6}}>
                <StyledHeader2>{h2}</StyledHeader2>
                <p>{p}</p>
                <a href="/zenfleet">Learn more</a>
            </Col>
        </Row>

    );
  }
}

export default ZenFleetComponent;
