import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../modules/colors';

/**
 * How we generate the background?
 * Better approach 
 * 1. Create isometric background with X and Z translate
 * 2. Set width, height, top and left positions
 * 3. The angle of the rect should remain the same on all viewport sizes
Inspiration: https://webdesign.tutsplus.com/tutorials/create-an-isometric-layout-with-3d-transforms--cms-27134

 * The triangle approach
 * 1. Seat up a background container with width, height and position absolute
 * 2. Draw a rectangular, full width, height depends on viewport
 *      - for landscape height is small - covers the topmost area behind menu
 *      - for portrait the height is 55%
 * 3. Draw a triangle based in viewport size
 *      - set bottom based on viewport
 *          - for landscape: 0
 *          - for portrait raise by 10% to avoid white stripe
 *      - Move the triangle to the left
 *      - Play around with left, right and top border to get the right top angle of the triangle
 Inspiration: https://1stwebdesigner.com/css-shapes/
 */

const StyledContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 120%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
`;

const StyledIsoBackground = styled.div`
     
    width: ${window.innerWidth > window.innerHeight 
    ? "200%" : "240%"};
    height: ${window.innerWidth > window.innerHeight 
    ? "170%" : "150%"};
    position: absolute;
    background: ${Colors.gradientBg};
    top: ${window.innerWidth > window.innerHeight 
    ? "-72%" : "-60%"};
    left: ${window.innerWidth > window.innerHeight 
    ? "-54%" : "-120%"};
    transform: rotateX(60deg) rotateY(0) rotateZ(-50deg);
`;

const LandingBackground = (props) => (
    <StyledContainer>
        <StyledIsoBackground />
    </StyledContainer> 
)
export default LandingBackground;