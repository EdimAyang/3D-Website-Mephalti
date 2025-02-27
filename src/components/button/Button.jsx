import styled from "styled-components";



export const Button = styled.button`
    padding:10px;
    width:${({
// @ts-ignore
    $large})  => $large ? `${$large}` : "100px"};
    height:45px;
    border:none;
    cursor: pointer;
    background-color:#FDC400;
    color:#1E1E1E;
    font-weight:bold;
    transition:all 0.9s ease-out ;

    &:hover{
        transform:translate(10%)  rotate(-5deg);
    }
`