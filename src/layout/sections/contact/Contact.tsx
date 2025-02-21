import React, {ElementRef, useRef} from "react";
import emailjs from '@emailjs/browser';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contact_Styles";
import {GradientText} from "../../../components/GradientText.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'> | null>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_06hx4df', 'template_07ufdyl', form.current, {
            publicKey: 'FJxA4L-jg6EJMsfUT',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset();
    };

    return (
        <S.Contacts id={"contacts"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"}></S.Field>
                    <S.Field required type={"email"} placeholder={"email"} name={"email"}></S.Field>
                    <S.Field required placeholder={"subject"} name={"subject"}></S.Field>
                    <S.Field required placeholder={"message"} as="textarea" name={"message"}></S.Field>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
                <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                    <S.Caption>For any questions please mail me:</S.Caption>
                    <S.Link href={"mailto:chylmanprosto@gmail.com"}>
                        <GradientText>chylmanprosto@gmail.com</GradientText>
                    </S.Link>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
