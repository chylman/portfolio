import {Container} from "../../../components/Container";
import {GradientText} from "../../../components/GradientText.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {S} from "./Slogan_Styled.ts";

export const Slogan = () => {
    return (
        <S.Slogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                    <S.Caption>For any questions please mail me:</S.Caption>
                    <S.Link href={"mailto:chylmanprosto@gmail.com"}>
                        <GradientText>chylmanprosto@gmail.com</GradientText>
                    </S.Link>
                </FlexWrapper>
            </Container>
        </S.Slogan>
    );
};

