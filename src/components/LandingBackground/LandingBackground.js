import React from 'react';
import styled from 'styled-components';

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
    height: 100%;
    overflow: hidden; 
`;

const StyledIsoBackground = styled.div`
    width: 200%;
    height: 150%;
    position: absolute;
    background: #fc5e5e;
    top: ${window.innerWidth > window.innerHeight 
    ? "-62%" : "-60%"};
    left: ${window.innerWidth > window.innerHeight 
    ? "-50%" : "-85%"};
    transform: rotateX(60deg) rotateY(0) rotateZ(-45deg);
    
`;

const LandingBackground = (props) => (
    <StyledContainer>
        <StyledIsoBackground />
    </StyledContainer> 
)
export default LandingBackground;

// const StyledTriBackground = styled.div`
//     width: 0;
//     height: 0;
//     position: absolute;
//     bottom: ${window.innerHeight > window.innerWidth ? "10%" : "10%"};;
//     left: -${window.innerWidth * .8}px;
//     border-left: ${window.innerWidth * 1}px solid transparent;
//     border-right: ${window.innerWidth * 1}px solid transparent;
//     border-top: ${window.innerHeight > window.innerWidth 
//         ? `${window.innerHeight * .5}px solid #fc5e5e` : `${window.innerHeight * .9}px solid #fc5e5e`};
// `;

// const StyledRectBackground = styled.div`
//     width: 100%;
//     height: ${window.innerHeight > window.innerWidth ? "55%" : "5rem"};
//     position: absolute;
//     background: #fc5e5e;
//     top: 0;
//     left: 0;
// `;