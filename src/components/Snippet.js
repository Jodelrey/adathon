import React from 'react'
import styled from 'styled-components';
import { Container , Text } from '../components/primitive';

const StyledSnippet = styled(Container)`
width: 200px;
height: 100px;
margin: 15px;
box-sizing: border-box;
border-radius: 5px;
border-left: 5px solid rgb(125,48,134);
box-shadow: 2px 3px 11px 0px rgba(0,0,0,0.39);
`;
const StyledHeading = styled.h3`
padding: 8px;
padding-left: 13px;
color: rgb(125,48,134);

`;
const StyledText= styled(Text)`
font-size: 25px;
text-align: center; 
padding: 10px;
color: #555;

`;

const Snippet = () => {
    return (
        <StyledSnippet>
            <StyledHeading>Ventas</StyledHeading>
            <StyledText>AR 45000</StyledText>
        </StyledSnippet>
    )
}

export default Snippet
