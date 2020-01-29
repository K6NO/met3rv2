import styled, {keyframes} from 'styled-components';
import { Colors } from '../../modules/colors';
import { device } from '../../modules/devices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledContainer = styled.section`
    @media ${device.lg} {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        padding-right: 15px;
        padding-left: 15px;
    }
    @media ${device.xl} {
        max-width: 1140px;
    }
`;

export const StyledFluidContainer = styled.section`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    /* background: ${Colors.lightText}; */
`;

export const StyledHeader1 = styled.h1`
    font-size: 30px;
    color: ${Colors.white};
`;

export const StyledHeader2 = styled.h2`
    background-image: ${Colors.gradientTextWebkit}; /* For Chrome and Safari */
    background-image: ${Colors.gradientTextMoz}; /* For old Fx (3.6 to 15) */
    background-image: ${Colors.gradientTextMs}; /* For pre-releases of IE 10*/
    background-image:  ${Colors.gradientTextO}; /* For old Opera (11.1 to 12.0) */
    background-image: ${Colors.gradientText}; /* Standard syntax; must be last */
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 24px;
    font-size: 2rem;
`;

export const StyledLink1 = styled.a`
    font-family: 'MontHeavyDemo', 'Impact', 'Arial', sans-serif;
    color: ${Colors.midblue};
    font-size: 12px;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    &:hover, &:active, &:focus {
        color: ${Colors.darkblue};
        outline: none;
        text-decoration: none;
    }
`;

export const StyledLink2 = styled.a`
    font-family: 'WorkSansRegular', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    color: ${Colors.white};
    font-size: 16px;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    &:hover, &:active, &:focus {
        color: ${Colors.white};
        outline: none;
        text-decoration: none;
    }
`;

export const StyledButtonLink = styled.a`
    display: block;
    text-align: center;
    min-width: 50px;
    max-width: 200px;
    font-size: 12px;
    font-size: 1.2rem;
    border: 1px solid white;
    border-radius: 5px;
    padding: .7rem 1.5rem;
    font-family: 'MontHeavyDemo', 'Impact', 'Arial', sans-serif;
    background: transparent;
    text-decoration: none;
    color: ${Colors.white}!important;
    
    &:disabled {
        opacity: .5;
    }
    &:disabled&:hover {
        opacity: .5;
    }
    &:hover, &:active, &:focus, &:focus:active, &:active:hover {
        cursor: pointer;
        background: ${Colors.darkblue};
        text-decoration: none;
        box-shadow: 0 0 1px 1px #cccccc;
        color: ${Colors.white};
        border: 1px solid ${Colors.white};
    }
`;

export const StyledNavLink = styled.a`
    font-family: 'MontHeavyDemo', 'Impact', 'Arial', sans-serif;
    color: ${Colors.white};
    font-size: 12px;
    font-size: 1.2rem;
    text-align: right;
	padding: 0 1rem;
    height: 1.2em;
    margin-top: 2rem;
    &:hover, &:active, &:focus {
        color: ${Colors.white};
        outline: none;
        text-decoration: none;
    }
    @media ${device.lg} {
        margin-top: 0;
        padding-left: 2rem!important;
        padding-right: .8rem!important;
    }
`;



export const StyledButton1 = styled.button`
    font-family: 'MontHeavyDemo', 'Impact', 'Arial', sans-serif;
    color: ${Colors.white};
    font-size: 12px;
    font-size: 1.2rem;
    background: ${Colors.gradientText};
    color: ${Colors.white};
    border: 1px solid transparent;
    border-radius: 5px;
    padding: .8rem 2.5rem;
    min-width: 60px;
    &:disabled {
        opacity: .5;
    }
    &:disabled&:hover {
        opacity: .5;
    }
    &:hover, &:active, &:focus, &:focus:active, &:active:hover {
        background: ${Colors.gradientText};
        opacity: .9;
        box-shadow: 0 0 1px 1px #cccccc;
        border: 1px solid ${Colors.darkblue};
    }
`;

export const StyledButton2 = styled(StyledButton1)`
    color: ${Colors.white};
    background: transparent;
    color: ${Colors.white};
    border: 1px solid white;
    border-radius: 5px;
    &:disabled {
        opacity: .5;
    }
    &:disabled&:hover {
        opacity: .5;
    }
    &:hover, &:active, &:focus, &:focus:active, &:active:hover {
        background: ${Colors.darkblue};
        box-shadow: 0 0 1px 1px #cccccc;
        color: ${Colors.white};
        border: 1px solid ${Colors.white};
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    display: inline-block!important;
    padding: 0.375rem 0.75rem;
    font-size: 12px;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${Colors.midText};
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    &:focus {
        outline: none;
        background-color: #ecf9ff;
    }
    @media ${device.lg} {
        width: 70%!important;
    }
`;

export const growIcon = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
`;
export const StyledContactIcon = styled.a`
    color: ${Colors.darkblue};
    font-size: 2.4em;
    margin-right: .5rem;
    &:hover {
        color: ${Colors.midblue};
        animation: ${growIcon} 200ms cubic-bezier(0.550, 0.085, 0.680, 0.530);
        animation-fill-mode: forwards;
    }
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  
`;