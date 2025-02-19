import {Logo} from "../../components/logo/Logo";
import IconGithub from "../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../assets/image/icons/linkedin-mini.svg";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Socials} from "../../components/socials/Socials";
import LogoImage from "../../assets/image/logo/logo-gray.svg?react"
import {GradientText} from "../../components/GradientText.ts";
import {S} from "./Footer_Styles.ts"

const MENU_ITEMS = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "About",
        href: "about",
    },
    {
        title: "Tech Stack",
        href: "techStack",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contacts",
        href: "contacts",
    },
]
const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper wrap={"wrap"}>
                    <S.FooterTop>
                        <Logo Icon={<LogoImage/>}/>
                        <S.LinkList>
                            <S.LinkItem>
                                <S.Link href={"tel:+9412345678"}>
                                    +91 12345 09876
                                </S.Link>
                            </S.LinkItem>
                            <S.LinkItem>
                                <S.Link href={"mailto: info@example.com"}>
                                    info@example.com
                                </S.Link>
                            </S.LinkItem>
                            <S.LinkItem>
                                <Socials items={SOCIAL_ITEMS}/>
                            </S.LinkItem>
                        </S.LinkList>
                    </S.FooterTop>
                    <S.FooterBottom>
                        <Menu menuItems={MENU_ITEMS}/>
                        <S.Copyright>Designed and built by <GradientText>Pavan
                            MG</GradientText> with <GradientText>Love</GradientText> & <GradientText>Coffee</GradientText></S.Copyright>
                    </S.FooterBottom>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
