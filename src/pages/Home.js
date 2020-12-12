import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/primitive';
import Graphic from '../components/Graphic';
import Snippet from '../components/Snippet';

const StyledHome = styled(Container)`
padding: 35px;
min-height: calc(100vh - 220px);
box-sizing: border-box;
display: flex;
justify-content: space-evenly;
align-items: center;

`;

const StyledSnippetContainer = styled(Container)`
width: 50%;
display: flex;
flex-wrap: wrap;
`


const Home = () => {
    return (
        <StyledHome>
        
            <Graphic />
            <StyledSnippetContainer>
                <Snippet />
                <Snippet />
                <Snippet />
                <Snippet />
            </StyledSnippetContainer>
           
        </StyledHome>
       

    )
}

export default Home
