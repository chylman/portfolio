import styled from "styled-components";

type WorkPropsType = {
    title: string
    description: string
    src: string
    stack: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Stack>{props.stack}</Stack>
            <Link href={"#"}>Live Preview</Link>
            <Link href={"#"}>View Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 373px;
  width: 100%;
  background-color: #989839;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Link = styled.a`
`

const Title = styled.h3`
`

const Description = styled.p`
`

const Stack = styled.p`
`
