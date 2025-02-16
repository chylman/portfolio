import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

const TabsList = styled.ul<{ justify?: string | null }>`
  display: flex;
  gap: 30px;
  justify-content: ${props => props.justify || "flex-start"};
`

const Link = styled.a<{ $active?: boolean }>`
  font-family: "DM Sans", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;

  color: transparent;

  ${props => props.active && css`
    & ${Mask} span {
      background-image: linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.accentSecond});
      color: transparent;
      background-clip: text;
    }
  `}
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

const ListItem = styled.li`
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
    &:hover {
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

const TabMenu = styled.div`
  ${TabsList} {
    margin: 0 0 50px 0;

    @media ${theme.media.tablet} {
      margin: 0 0 30px 0;
    }
    @media ${theme.media.mobile} {
      margin: 0 0 15px 0;
    }
  }
`

export const S = {
    TabMenu,
    TabsList,
    Link,
    ListItem,
    Mask
}
