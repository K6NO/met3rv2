import React, { Component } from 'react';
import TextAnimationComponent from './TextAnimationComponent';
const words = [
    'Advanced',
    'Managed',
    'Distributed',
    'Low cost',
    'Orchestrated'
]
class TextAnimationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: words[0]
        };
        this.lettersElement = null;
        this.setLettersRef = element => {
            this.lettersElement = element
        };
    }
 

    updateWordHandle = () => {
        const nextWord = words.indexOf(this.state.word) === words.length -1 
            ? words[0]
            : words[words.indexOf(this.state.word) + 1];
        this.setState({
            word: nextWord
        });
    }
    
  render() {
    return (
        <TextAnimationComponent 
            word={this.state.word}
            animCompleteCallback={this.updateWordHandle}/>
    );
  }
}

export default TextAnimationWrapper;
