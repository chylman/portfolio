import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import IconGithub from "../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../assets/image/icons/linkedin-mini.svg";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Socials} from "../../components/socials/Socials";

const MENU_ITEMS = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper wrap={"wrap"}>
                    <FooterTop>
                        <Logo/>
                        <LinkList>
                            <LinkItem>+91 12345 09876</LinkItem>
                            <LinkItem>info@example.com</LinkItem>
                            <LinkItem>
                                <Socials items={SOCIAL_ITEMS}/>
                            </LinkItem>
                        </LinkList>
                    </FooterTop>
                    <Menu menuItems={MENU_ITEMS}/>
                    <Copyright>Designed and built by Pavan MG with Love & Coffee</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #e5623b;
  min-height: 20vh;
`

const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`
const LinkItem = styled.li`

`

const Copyright = styled.small`

`

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
