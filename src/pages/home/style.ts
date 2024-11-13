import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface ImgProps {
    urlImg: string,
}

export const PrincipalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div<ImgProps>`
    background-image: url(${(props)=>props.urlImg});
    background-repeat: no-repeat;
    width: 40%;
    height: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    :first-child {
        margin-top: 18%;
    }

    @media(max-width: 1440px) {
        width: 45%;
    }

    @media(max-width: 1024px) {
        width: 65%;
    }

    @media(max-width: 768px) {
        width: 85%;
    }
    @media(max-width: 640px) {
        width: 100%;
        background-size: 100vw 100vh;
    }
`

export const LinkNav = styled(NavLink)`
`

export const Image1 = styled.img`
    width: 10vw;
    transition: width 0.3s;
    &:hover {
        width: 12vw;
    }

    @media(max-width: 1440px) {
        width: 12vw;
        transition: width 0.3s;
        &:hover {
            width: 14vw;
        }
    }
    @media(max-width: 1024px) {
        width: 18vw;
        transition: width 0.3s;
        &:hover {
            width: 22vw;
        }
    }
    @media(max-width: 768px) {
        width: 22vw;
        &:hover {
            width: 26vw;
        }
    }
    @media(max-width: 640px) {
        width: 35vw;
        &:hover {
            width: 40vw;
        }
    }
`
export const Image2 = styled.img`
    width: 12vw;
    transition: width 0.3s;
     &:hover {
        width: 14vw;
    }

    @media(max-width: 1440px) {
        width: 14vw;
        &:hover {
            width: 16vw;
        }
    }
    @media(max-width: 1024px) {
        width: 20vw;
        &:hover {
            width: 24vw;
        }
    }
    @media(max-width: 768px) {
        width: 24vw;
        &:hover {
            width: 28vw;
        }
    }
    @media(max-width: 640px) {
        width: 40vw;
        &:hover {
            width: 45vw;
        }
    }
`