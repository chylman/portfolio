import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm action={"#"}>
                    <Field placeholder={"name"}></Field>
                    <Field placeholder={"subject"}></Field>
                    <Field placeholder={"message"} as="textarea"></Field>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  padding: 100px 0;
  min-height: 50vh;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  max-width: 540px;
  width: 100%;
`
const Field = styled.input`
  padding: 7px 15px;
  width: 100%;
  background-color: ${theme.colors.secondBg};
  border-radius: 5px;
  border: 1px solid ${theme.colors.textSecond};

  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.textSecond};


  &::placeholder {
    text-transform: capitalize;
    color: ${theme.colors.textSecond};

    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 18px;
  }
`
