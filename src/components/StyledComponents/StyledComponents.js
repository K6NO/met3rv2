import styled from 'styled-components';
import { NavLink } from 'reactstrap';
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
    background: ${Colors.lightText};
`;

export const StyledHeader1 = styled.h1`
    font-size: 3rem;
    color: #ffffff;
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
    font-size: 2.4rem;
`;

export const StyledLink1 = styled.a`
    font-family: 'MontHeavyDemo', 'Impact', 'Arial', sans-serif;
    color: ${Colors.midblue};
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
    color: #ffffff;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    &:hover, &:active, &:focus {
        color: #ffffff;
        outline: none;
        text-decoration: none;
    }
`;

export const StyledNavLink = styled(NavLink)`
    font-family: 'WorkSansRegular', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    color: #ffffff;
    font-size: 1.2rem;
    text-align: right;
    &:hover, &:active, &:focus {
        color: #ffffff;
        outline: none;
        text-decoration: none;
    }
    @media ${device.lg} {
        padding-top: 1rem;
        padding-left: 2rem!important;
        padding-right: .8rem!important;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
`;

export const StyledButton1 = styled.button`
    font-family: 'MontHeavyDemo', 'Impact', 'Arial', sans-serif;
    color: #ffffff;
    font-size: 1.2rem;
    background: ${Colors.gradientText};
    color: #ffffff;
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
    color: #ffffff;
    background: transparent;
    color: #ffffff;
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
        color: #ffffff;
        border: 1px solid #ffffff;
    }
`;

export const StyledInput = styled.input`
    width: 70%!important;
    display: inline-block!important;
    padding: 0.375rem 0.75rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${Colors.lightText};
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
`;
