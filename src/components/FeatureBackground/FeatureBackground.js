import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../modules/colors';
const StyledContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    left: 0;
    overflow: hidden; 
    z-index:-1;
`;

const StyledBackground = styled.div`
    width: 100%;
    height:100%;
    background: ${Colors.darkblue};
`;

const FeatureBackground = (props) => (
    <StyledContainer>
        <StyledBackground />
    </StyledContainer> 
)
export default FeatureBackground;