import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gaprow?: string
    gapcolumn?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  height: 100%;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "flex-start"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  row-gap: ${props => props.gaprow || "0"};
  column-gap: ${props => props.gapcolumn || "0"};
`
