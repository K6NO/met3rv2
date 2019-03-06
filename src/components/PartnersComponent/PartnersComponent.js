import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CarouselComponent from '../CarouselComponent/CarouselComponent';

const partnerText = 'We are partners with';
const supporterText = 'Our supporters';
const partnerBox = [
    {altText: 'Advanced', src: 'https://via.placeholder.com/150x100'},
    {altText: 'Managed', src: 'https://via.placeholder.com/150x50'},
    {altText: 'Distributed', src: 'https://via.placeholder.com/150'},
];
const supporterBox = [
    {altText: 'Lajos', src: 'https://via.placeholder.com/150'},
    {altText: 'Lorinc', src: 'https://via.placeholder.com/150'},
    {altText: 'Gyuri', src: 'https://via.placeholder.com/150'},
]
class PartnersComponent extends Component {
  
  render() {
    const props = this.props;
    return (
        <div>
            <Col xs={12} sm={6}>
                <h4>{partnerText}</h4>
                <CarouselComponent items={partnerBox}/>
            </Col>
            <Col xs={12} sm={6}>
                <h4>{supporterText}</h4>
                <CarouselComponent items={supporterBox}/>
            </Col>
        </div>
    );
  }
}

export default PartnersComponent;
