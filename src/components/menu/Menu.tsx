import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
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
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

const Link = styled.a`
  font-family: "DM Sans", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  text-align: center;

  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;

  span {
    color: ${theme.colors.textSecond};
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

    position: absolute;
    top: 50%;
    left: -5px;
    right: -10px;
    z-index: 1;
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
