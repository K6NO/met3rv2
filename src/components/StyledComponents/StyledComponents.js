import styled from 'styled-components';
import { Colors } from '../../modules/colors';

export const StyledHeader2 = styled.h2`
    background-image: ${Colors.gradientTextWebkit}; /* For Chrome and Safari */
    background-image: ${Colors.gradientTextMoz}; /* For old Fx (3.6 to 15) */
    background-image: ${Colors.gradientTextMs}; /* For pre-releases of IE 10*/
    background-image:  ${Colors.gradientTextO}; /* For old Opera (11.1 to 12.0) */
    background-image: ${Colors.gradientText}; /* Standard syntax; must be last */
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 3.6rem;
`;