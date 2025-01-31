import React from 'react';
import photo from '../../../assets/image/content/503536831.jpg'
import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <div>
                <p>Hi 👋, My name is Pavan MG I build things for web</p>
            </div>
            <Photo src={photo}/>
        </div>
    );
};

const Photo = styled.img`
  width: 367px;
  height: 367px;
  object-fit: cover;
`
