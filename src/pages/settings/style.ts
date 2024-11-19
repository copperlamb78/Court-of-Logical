import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackButton = styled(NavLink)`
    position: absolute;
    width: 8vw;
    height: 8vh;
    bottom: 12.5vh;
    right: 42.2vw;
    background-color: #ffefab;
    border-radius: 8vw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    font-size: 2rem;
    border: 2px solid black;
    font-family: "Aladin", system-ui;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: #fee890;
        width: 9vw;
        height: 9vh;
        font-size: 2.3rem;
        border: 1px solid black;
    }
`