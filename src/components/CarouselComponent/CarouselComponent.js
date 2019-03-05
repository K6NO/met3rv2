import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem
} from 'reactstrap';

let imageCounter = 0;
let storedUrl = 0;
let storedAlt= 0;
class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const { items } = this.props;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const { items } = this.props;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props;


    const slides = items.map((item) => {
      if(imageCounter === 0) {
          imageCounter = 0;
          storedUrl = item.src;
          storedAlt = item.alt;
          return null;
      }
      
      imageCounter = 0;
      storedAlt = '';
      storedUrl = '';
      return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.altText}
          >
            <img src={storedUrl} alt={storedAlt} />
            <img src={item.src} alt={item.altText} />
          </CarouselItem>
        );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        ride={'carousel'}
        interval={6000}
      >
        {slides}
      </Carousel>
    );
  }
}


export default CarouselComponent;