import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem
} from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100px;
  text-align: center;
  .subtitle {
    font-size: .8rem;
    text-transform: uppercase;
    margin-top: 2rem;
    
  }
`;
const StyledLogo = styled.img`
  max-width: 150px;
  max-height: 60px;
`;


class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      
    };
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const { items } = this.props;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const { items } = this.props;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props;
    const slides = items.map((item) => {
      return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.altText}
            className="text-center"
          >
            <StyledLogo src={item.src} alt={item.altText} />
            <p className="subtitle">{item.altText}</p>
          </CarouselItem>
        );
    });
    return (
      <StyledDiv>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          ride={'carousel'}
          interval={4000}
        >
          {slides}
        </Carousel>
      </StyledDiv>
    );
  }
}


export default CarouselComponent;