import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contact_Styles";
import React from "react";

export const Contact: React.FC = () => {
    return (
        <S.Contacts id={"contacts"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form action={"#"}>
                    <S.Field placeholder={"name"}></S.Field>
                    <S.Field placeholder={"subject"}></S.Field>
                    <S.Field placeholder={"message"} as="textarea"></S.Field>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

