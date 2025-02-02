import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import IconGithub from "../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../assets/image/icons/linkedin-mini.svg";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";

const MENU_ITEMS = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper wrap={"wrap"}>
                <FooterTop>
                    <Logo/>
                    <LinkList>
                        <LinkItem href={"#"}>+91 12345 09876</LinkItem>
                        <LinkItem href={"#"}>info@example.com</LinkItem>
                        <LinkItem>
                            <SocialList>
                                {SOCIAL_ITEMS.map((item) => {
                                    return <SocialItem>
                                        <SocialLink>
                                            {item.icon}
                                        </SocialLink>
                                    </SocialItem>
                                })}
                            </SocialList>
                        </LinkItem>
                    </LinkList>
                </FooterTop>
                <Menu menuItems={MENU_ITEMS}/>
                <Copyright>Designed and built by Pavan MG with Love & Coffee</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #e5623b;
  min-height: 202vh;
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

const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

const SocialItem = styled.li`

`
const SocialLink = styled.a`

`

const Copyright = styled.small`

`

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
