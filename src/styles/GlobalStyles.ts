import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        color: ${props => props.theme.colors.white};
        font-family: "Aladin", system-ui;
    }
    
` 

export const BackgroundContainer = styled.div<{ img: string }>`
    background-image: url(${props => props.img});
    width: 100%;
    height: 100vh;
    background-size: cover;
`