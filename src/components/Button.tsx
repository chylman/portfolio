import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Button = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px 5px;


  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: ${theme.colors.textMain};
  cursor: pointer;


  &::before {
    z-index: -1;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
    transition: opacity ${theme.animation.transitionDefault};

    background: linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.accentSecond});
    opacity: 0;
  }

  @media (hover: hover) {
    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }

`
