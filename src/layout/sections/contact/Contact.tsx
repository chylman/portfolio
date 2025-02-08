import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}></Field>
                    <Field placeholder={"subject"}></Field>
                    <Field placeholder={"message"} as="textarea"></Field>
                    <Button>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
`
const Field = styled.input`
`
