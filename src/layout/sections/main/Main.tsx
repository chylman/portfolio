import React from 'react';
import photo from '../../../assets/image/content/503536831.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <h1>Hi 👋, My name is Ilya Afanasev I build things for web</h1>
                </div>
                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  background-color: #191919;
  min-height: 100vh;
`

const Photo = styled.img`
  width: 367px;
  height: 367px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  color: #ffffff;
`
