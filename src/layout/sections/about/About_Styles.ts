import styled from "styled-components";
import {SectionText} from "../../../components/SectionText";
import {SectionTitle} from "../../../components/SectionTitle";

const About = styled.div`
  ${SectionTitle}, ${SectionText} {
    text-align: left;
  }
`

const AboutList = styled.ul`
`

const AboutItem = styled.li`
  &:last-child {
    margin-bottom: 38px;
  }
`

export const S = {
    About,
    AboutList,
    AboutItem
}
