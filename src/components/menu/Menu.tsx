import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string>, justify?: string, className?: string }) => {
    return (
        <StyledMenu className={props.className}>
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
        </StyledMenu>
    );
};

export const StyledMenu = styled.nav`
    // @media ${theme.media.tablet} {
  //   display: none;
  // }
`

const List = styled.ul<{ justify?: string | null }>`
  display: flex;
  gap: 30px;
  justify-content: ${props => props.justify || "flex-start"};
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
