import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <span>For any questions please mail me:</span>
            <Button as={"a"} href={"#"}>chylmanprosto@gmail.com</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #307c3d;
`
