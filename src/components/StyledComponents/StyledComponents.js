import styled from 'styled-components';

export const StyledHeader2 = styled.h2`
    background-image: -webkit-linear-gradient(left #E0F8F7, #585858); /* For Chrome and Safari */
    background-image:    -moz-linear-gradient(left, #E0F8F7, #585858); /* For old Fx (3.6 to 15) */
    background-image:     -ms-linear-gradient(left, #E0F8F7, #585858); /* For pre-releases of IE 10*/
    background-image:      -o-linear-gradient(left, #E0F8F7, #585858); /* For old Opera (11.1 to 12.0) */
    background-image:         linear-gradient(to right, #E0F8F7, #585858); /* Standard syntax; must be last */
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;