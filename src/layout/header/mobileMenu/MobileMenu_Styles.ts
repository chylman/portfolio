import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {S as S_MenuList} from "../../../components/menuList/MenuList_Styles";
import {S as S_Socials} from "../../../components/socials/Socials_Styles";

const MobileMenu = styled.nav`
  display: none;

  ${S_MenuList.MenuList} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: gap ${theme.animation.transitionDefault};
  }

  ${S_Socials.Socials} {
    gap: 0;
    transition: gap ${theme.animation.transitionDefault};
  }

  @media ${theme.media.tablet} {
    display: block;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  z-index: 999999;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:last-child {
      display: none;
    }
  }

  ${props => props.isOpen && css`
    svg {
      &:first-child {
        display: none;
      }

      &:last-child {
        display: inline-flex;
      }
    }
  `}
`

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${theme.colors.secondBg};
  transform: translateX(100%);
  transition: transform ${theme.animation.transitionDefault};

  ${props => props.isOpen && css`
    transform: translateX(0);

    ${S_MenuList.MenuList} {
      gap: 30px;
    }

    ${S_Socials.Socials} {
      gap: 20px;
    }
  `}
`

export const S = {
    MobileMenu,
    BurgerButton,
    MobileMenuWrapper,
}
