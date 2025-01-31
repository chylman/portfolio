import styled from "styled-components";

type FlexWrappePropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

const FlexWrapper = styled.div<FlexWrappePropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  flex-direction: ${props => props.justify || "flex-start"};
`
