import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../modules/colors';
import { StyledNavLink } from '../StyledComponents/StyledComponents';


const StyledSpan = styled.span`
    position: relative;
	display: inline-block;
	-webkit-transition: -webkit-transform 0.4s;
	-moz-transition: -moz-transform 0.4s;
    transition: transform 0.4s;
    ::before {
        position: absolute;
        top: 100%;
        content: ${props => `'${props.text}'`};
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        
  }
`;
const AnimStyledNavLink = styled(StyledNavLink)`
    overflow: hidden;
    display: inline-block;
    
    &:hover ${StyledSpan} {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        transform: translateY(-100%);
        filter: drop-shadow(0px 0px 1px ${Colors.lightBlue})
    }
    &:focus ${StyledSpan} {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        transform: translateY(-100%);
    }
`;



const AnimLink = (props) => (
    <AnimStyledNavLink className="AnimLink" href={props.path}>
      <StyledSpan text={props.text}>
        {props.text}
      </StyledSpan>
    </AnimStyledNavLink>
)

export default AnimLink;