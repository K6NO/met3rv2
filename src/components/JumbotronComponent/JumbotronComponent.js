import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TextAnimationWrapper from '../TextAnimationComponent/TextAnimationWrapper';

const title = 'MET3R ZenCharge';
const h1 = ' network of residential charging points';

class JumbotronComponent extends Component {
  
  render() {

    return (
        <Row className="JumbotronComponent">
        <Col xs={12} className="text-left">
            <h1>{title}</h1>
            <TextAnimationWrapper />
            <h1>{h1}</h1>
            <div className="imageRight1Holder"></div>
            <div className="imageRight2Holder"></div>
        </Col>
          
        </Row>

    );
  }
}

export default JumbotronComponent;
