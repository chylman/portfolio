import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {Button} from "../../../../components/Button.ts";
import {font} from "../../../../styles/Common.ts";

const Work = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 373px;
  width: 100%;
  background-color: ${theme.colors.secondBg};
  border-radius: 20px;
  color: ${theme.colors.textSmall};
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    filter: blur(4px);
    opacity: 0;
    transition: opacity ${theme.animation.transitionDefault};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity ${theme.animation.transitionDefault};
  }

`

const Link = styled.a`
  color: ${theme.colors.white};
  text-decoration: underline;
  font-weight: 400;
  font-size: 16px;

  svg {
    margin: 0 12px 0 0;
  }
`

const Title = styled.h3`
  margin: 0 0 17px 0;

  ${font({weight: 500, Fmax: 28, Fmin: 24})}

  text-align: center;

`

const Description = styled.p`
  margin: 0 0 12px 0;

  ${font({weight: 300, lineHeight: 1.44, Fmax: 18, Fmin: 16})}

  color: ${theme.colors.textSmall};
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 28px 45px 25px 28px;
`

const Stack = styled.p`
  padding: 0 0 21px 0;
  font-weight: 300;
  font-size: 14px;
`

const TitleStack = styled.span`
  font-weight: 400;
  font-size: 16px;
`

export const S = {
    Work,
    Image,
    ImageWrapper,
    Link,
    Title,
    Description,
    Content,
    Stack,
    TitleStack,
}
