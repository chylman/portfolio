import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {TbMenu3, TbX} from "react-icons/tb";
import {Socials} from "../../../components/socials/Socials";
import IconGithub from "../../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../../assets/image/icons/linkedin-mini.svg";

const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

type MobileMenuPropsType = {
    menuItems: Array<string>
    justify?: string | null
    className?: string
}

export const MobileMenu = (props: MobileMenuPropsType) => {
    return (
        <StyledMobileMenu className={props.className}>
            <BurgerButton isOpen={true}>
                <TbMenu3 size="36" color={theme.colors.iconMain}/>
                <TbX size="36" color={theme.colors.iconMain}/>
            </BurgerButton>
            <MobileMenuWrapper isOpen={true}>
                <List justify={props.justify || null}>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="#">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </List>
                <Socials items={SOCIAL_ITEMS}/>
            </MobileMenuWrapper>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;

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
`

const MobileMenuWrapper = styled.div<{ isOpen?: boolean }>`
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondBg};
  visibility: hidden;

  ${props => props.isOpen && css<{ isOpen?: boolean }>} {
    visibility: visible;
  }
`

const List = styled.ul<{ justify?: string | null }>`
  display: flex;
  justify-content: ${props => props.justify || "flex-start"};
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const Link = styled.a`
  font-family: "DM Sans", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  white-space: nowrap;

  color: transparent;
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
`
