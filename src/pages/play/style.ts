import styled from "styled-components";




export const PrincipalContainer = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    max-width: 99.1vw;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
        position: absolute;
        left: 30vw;
        bottom: 10vh;
        display: flex;
        flex-direction: row;
        gap: 13vw;
    }
`
export const Image = styled.img`
    width: 40%;
    height: 100vh;
`

export const Background = styled.img`
    width: 50%;
    height: 100vh;
`

export const Pergaminho = styled.img`
    width: 30%;
    height: 50vh;
    position: absolute;
    top: 1vw;
    right: 35vw;
`

export const QuestionButton = styled.button`
  position: absolute;
  bottom: 25vh; /* substitui 190px por 12vh */
  left: 43vw; /* substitui 650px por 40vw */
  width: 12vw; /* substitui 150px por 9vw */
  height: 8vh; /* substitui 55px por 3.5vh */
  background: transparent;
  border: none;
  cursor: pointer;
`

export const CardContainer = styled.button<{ flipped: boolean }>`
    width: 5vw;
    height: 15vh;
    position: relative;
    perspective: 1000px; /* Para criar a perspectiva 3D */
    transform-style: preserve-3d; /* Garante que os filhos mantenham a rotação 3D */
    cursor: pointer;
    border: transparent;
    background-color: transparent;
    div {
        width: 100%;
        height: 100%;
        position: absolute;
        /* right: 45vw;
        bottom: -40vh; */ 
        backface-visibility: hidden;
        transition: transform 0.6s;
        
        &:first-child {
            transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
        }

        &:last-child {
            transform: ${({ flipped }) => (flipped ? 'rotateY(0deg)' : 'rotateY(180deg)')};
        }
    }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export const CardFront = styled(CardFace)<{ frontcard: string }>`
  background-image: url(${props => props.frontcard});
`;

export const CardBack = styled(CardFace)<{ backcard: string }>`
  background-image: url(${props => props.backcard});
  transform: rotateY(180deg);
`;

export const P = styled.div`
    position: absolute;
    top: 10vh;
    right: 40vw;
    font-size: 24px;
    font-weight: 700;
    text-align: justify;
    color: black;
    width: 20vw;
    word-wrap: break-word;
    overflow-wrap: break-word;
`

export const AlertContainer = styled.div`
    width: 100vw;
    position: absolute;
    left: 25vw;

`

export const SkipButton = styled.button`
    position: absolute;
    right: 37vw;
    bottom: 10vh;
    width: 8vw;
    height: 8vh;
    background-color: #ffefab;
    border-radius: 8vw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 2rem;
    border: 2px solid black;
    font-family: "Aladin", system-ui;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #fee890;
    }
`