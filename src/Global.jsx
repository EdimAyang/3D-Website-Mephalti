import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

`

export const AppStyle = styled.div`
    width:100%;
    height:100vh;
    overflow-x:hidden;
    background-color:#F6F4ED;
`