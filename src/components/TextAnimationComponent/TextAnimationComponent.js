import React, { Component } from 'react';
import anime from 'animejs';
import _ from 'lodash';
import './TextAnimationComponent.css';
import styled from 'styled-components';
import { device } from '../../modules/devices';
/**
 * How this animation works?
 * 1.   Set up refs on the letter container element 
 * 2.   In render() call wrapLetters() 
 *          - find lettersElement ref, remove its children 
 *          - wrap each letter of the word of the new word in a span
 * 3.   In componentDidMount() call animateLetters()
 * 4.   animateLetters() runs the animation timeline. The last animation
 *      calls animCompleteCallback(), which updates the state of the parent component
 * 5.   A new word is passed as props
 * 6.   componentDidUpdate() calls animateLetters() again
 * 7.   animCompleteCallback() fires again when the animation is over
 */
// Inspiration: http://tobiasahlin.com/moving-letters/#11

const StyledAnimation = styled.h1`
    display: inline;
    font-size: 24px; 
    font-size: ${window.innerWidth < 340 ? '2.4em!important' : '2.8em!important'};
    padding-bottom: 2rem;
    @media ${device.sm} {
        font-size: 30px;
        font-size: 3em;
    }
`;

class TextAnimationComponent extends Component {
    constructor(props) {
        super(props);
        this.lettersElement = null;
        this.setLettersRef = element => {
            this.lettersElement = element
        };
    }

    componentDidMount() {
        this.animateLetters();
    };

    componentDidUpdate () {
        this.animateLetters();
    }

    animateLetters = () => {
        anime.timeline({
            loop: false,
        })
        .add({
            targets: '.ml11 .line',
            width: 0,
            translateX: 0,
            duration: 1,
            opacity: 0.2,
            scaleY: 0
        })
        .add({
            targets: '.ml11',
            opacity: 1,
            duration: 1
        })
        .add({
            targets: '.ml11 .line',
            scaleY: [0,.8],
            opacity: [0.2,0.8],
            easing: "easeOutExpo",
            duration: 1,
        })
        .add({
            targets: '.ml11 .line',
            width: [this.lettersElement 
                ? this.lettersElement.offsetWidth + 50
                : 300],
            easing: "easeInOutSine",
            duration: 100,
        })
        .add({
            targets: '.ml11 .line',
            width: 0,
            translateX: this.lettersElement 
                ? this.lettersElement.offsetWidth + 50
                : 300,
            easing: "easeInOutSine",
            duration: 80,
        })
        .add({
            targets: '.ml11 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 400,
            delay: function(el, i) {
            return 34 * (i+1)
            }
        }, '-=200')
        .add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 500,
            complete: () => this.props.animCompleteCallback(),
    });
}

    wrapLetters = (word) => {
        if (this.lettersElement) {
            [...this.lettersElement.children].forEach(e => delete this.lettersElement.children[e])
        }
        return word.split('').map((letter, i) => (
            <span key={i} className='letter'>{letter}</span>
    ))};
    
  render() {

    return (
        <StyledAnimation className="ml11">
            <span className="text-wrapper">
                <span className="line line1"></span>
                <span 
                    ref={this.setLettersRef} 
                    className="letters">
                    {this.wrapLetters(this.props.word)}
                </span>
            </span>
        </StyledAnimation>
    );
  }
}

export default TextAnimationComponent;
