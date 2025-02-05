import styled from "styled-components";

export const Navbar = styled.nav`
    width:100%;
    height:60px;
    padding:10px;
    padding-left:40px;
    padding-right:40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:1000;
    position:fixed;
    top:0;
    background-image:url("/public/vectors/Ellipse 1.svg");
    background-color:#F6F4ED;
    background-repeat:no-repeat;
    img{
      transform:scale(0.7);

    }
    @media screen and (max-width:650px){
        height:50px;
        padding-left:0px;
        padding-right:0px;
        padding:10px;
        &>button{
            display:none;
        }
        section{
            width:35%;
            height:100%;
            padding:2px;
            img{
                width:100%;
                height:100%;
                
            }
        }
    }
`

export const Navigations = styled.div`
    width:679px;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    a{
        text-decoration:none;
        color:#1E1E1E;
        font-family: "Work Sans", serif;
        font-size:14px;
    }
    /* @media screen and (max-width:650px){ */
        /* display:none; */
    /* } */
    @media screen and (max-width:650px){
    width: 100%;
    height:${({active}) => active ? "300px" : "0px" }; 
    left:0;
    top:50px;
    position:absolute;
    background-image:url("/public/vectors/Ellipse 1.svg");
    background-color:#F6F4ED;
    background-repeat:no-repeat;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition-duration:0.8s;
    z-index:100;
    visibility:${({active})=>active ? "show" : "hidden"};

    a{
       text-decoration:none;
       font-size:20px;
       cursor: pointer;
       padding: 10px;
       color:#ffff;
       visibility:${({active})=>active ? "show" : "hidden"};
    }
}

`
export const Bars = styled.img`
    width:35px;
    height:35px;
    cursor: pointer;
    display:none;
    @media screen and (max-width:650px){
        display:block;
    }
`