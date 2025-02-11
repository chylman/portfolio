import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import IconGithub from "../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../assets/image/icons/linkedin-mini.svg";
import {Menu, StyledMenu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Socials} from "../../components/socials/Socials";
import logoImage from "../../assets/image/logo/logo-gray.svg"
import {theme} from "../../styles/Theme.tsx";
import {GradientText} from "../../components/GradientText.tsx";

const MENU_ITEMS = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper wrap={"wrap"}>
                    <FooterTop>
                        <Logo src={logoImage}/>
                        <LinkList>
                            <LinkItem>
                                <Link href={"tel:+9412345678"}>
                                    +91 12345 09876
                                </Link>
                            </LinkItem>
                            <LinkItem>
                                <Link href={"mailto: info@example.com"}>
                                    info@example.com
                                </Link>
                            </LinkItem>
                            <LinkItem>
                                <Socials items={SOCIAL_ITEMS}/>
                            </LinkItem>
                        </LinkList>
                    </FooterTop>
                    <FooterBottom>
                        <Menu menuItems={MENU_ITEMS}/>
                        <Copyright>Designed and built by <GradientText>Pavan
                            MG</GradientText> with <GradientText>Love</GradientText> & <GradientText>Coffee</GradientText></Copyright>
                    </FooterBottom>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  ${StyledMenu} {
    @media ${theme.media.tablet} {
      display: none;
    }
  }
`

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  column-gap: 33px;

  @media ${theme.media.tablet} {
    justify-content: center;
    row-gap: 15px;
  }
`
const LinkItem = styled.li`

`

const Link = styled.a`
  display: inline-flex;
  font-weight: 400;
  font-size: 18px;
  color: ${theme.colors.textSecond};
  transition: color ${theme.animation.transitionDefault};

  &:hover {
    color: ${theme.colors.white};
  }
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 18px;
  color: ${theme.colors.textSecond};
`

const FooterTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 35px 0;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentDecor};
  }

  @media ${theme.media.tablet} {
    column-gap: 33px;
    justify-content: center;
    flex-wrap: wrap;
  }

`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 135px;

  @media ${theme.media.tablet} {
    justify-content: center;
  }
`
