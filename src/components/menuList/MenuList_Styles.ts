import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

const MenuList = styled.ul<{ justify?: string | null }>`
  display: flex;
  gap: 30px;
  justify-content: ${props => props.justify || "flex-start"};
`


const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  transition: transform ${theme.animation.transitionDefault};

  span {
    color: ${theme.colors.textSecond};
    white-space: nowrap;

    transition: color ${theme.animation.transitionDefault};
  }

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const MenuListLink = styled(Link)`
  font-family: "DM Sans", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  white-space: nowrap;

  color: transparent;
  cursor: pointer;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.textSecond};
    transform: scale(0);
    transition: transform ${theme.animation.transitionDefault};

    position: absolute;
    top: 50%;
    left: -5px;
    right: -10px;
    z-index: 1;

    pointer-events: none;
  }

  @media (hover: hover) {
    &:hover, &.isActive {
      &::before {
        transform: scale(1);
      }

      ${Mask} {
        transform: skewX(12deg) translateX(5px);
      }

      ${Mask} span {
        background-image: linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.accentSecond});
        color: transparent;
        background-clip: text;
      }

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`

const ListItem = styled.li`

`

export const S = {
    MenuList,
    MenuListLink,
    Mask,
    ListItem
}
