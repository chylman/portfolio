import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import IconGithub from "../../../../assets/image/icons/github-mini-white.svg";
import IconChain from "../../../../assets/image/icons/chain.svg";

type WorkPropsType = {
    title: string
    description: string
    src: string
    titleStack: string
    stack: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Content>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <Stack>
                    <TitleStack>{props.titleStack}</TitleStack>
                    {props.stack}
                </Stack>
                <Link href={"#"}>
                    <IconChain/>
                    Live Preview
                </Link>
                <Link href={"#"}>
                    <IconGithub/>
                    View Code
                </Link>
            </Content>
        </StyledWork>
    );
};

const StyledWork = styled.div`
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
  
  font-weight: 500;
  font-size: 28px;
  text-align: center;
`

const Description = styled.p`
  margin: 0 0 12px 0;
  
  font-weight: 300;
  font-size: 18px;
  line-height: 144%;
  color: ${theme.colors.textSmall};
`
const Content = styled.div `
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
