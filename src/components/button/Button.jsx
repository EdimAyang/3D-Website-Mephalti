import styled from "styled-components";



export const Button = styled.button`
    padding:10px;
    width:${({$large})  => $large ? `${$large}` : "100px"};
    height:45px;
    border:none;
    cursor: pointer;
    background-color:#FDC400;
    color:#1E1E1E;
    font-weight:bold;
`