import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Socials} from "../../components/socials/Socials";
import IconGithub from "../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../assets/image/icons/linkedin-mini.svg";

const MENU_ITEMS = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={MENU_ITEMS}/>
                    <Socials items={SOCIAL_ITEMS}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 41px 0 21px;
  background-color: ${theme.colors.primaryBg};
`
