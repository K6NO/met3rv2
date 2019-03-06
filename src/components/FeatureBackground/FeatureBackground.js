import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../modules/colors';
import { device } from '../../modules/devices';
const StyledContainer = styled.div`
    position: absolute;
    width: 100%;
    height: ${`${window.innerHeight * .8}px`};
    top: 0;
    left: 0;
    overflow: hidden; 
    z-index:-1;
    @media ${device.md} {
        height: ${`${window.innerHeight * .6}px`};
    }
`;

const StyledBackground = styled.div`
    width: 100%;
    height:100%;
    background: ${Colors.midblue};
    /* transform: rotateX(60deg) rotateY(0) rotateZ(-50deg); */
`;

const FeatureBackground = (props) => (
    <StyledContainer>
        <StyledBackground />
    </StyledContainer> 
)
export default FeatureBackground;