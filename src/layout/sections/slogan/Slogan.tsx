import styled from "styled-components";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <span>For any questions please mail me:</span>
                <Button as={"a"} href={"#"}>chylmanprosto@gmail.com</Button>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #307c3d;
`
