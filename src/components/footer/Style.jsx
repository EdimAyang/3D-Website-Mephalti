import styled from "styled-components";

export const FooterStyles = styled.footer`
    width:100%;
    height:400px;
    margin-top:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:5%;
    position:relative;
    top:5%;
    @media screen and (max-width:650px){
        padding:10px;
        flex-direction:column-reverse;
        height:770px;
        align-items:start;
        margin-top:40%;
    }

`
export const Footer_Logo_Wrapper = styled.div`
    height:100%;
    width:280px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    img{
        width:80%;
    }
    &>div{
        width:100%;
        height:40%;
        display:flex;
        justify-content:space-between;
        justify-content:start;
        align-items:center;
        gap:20px;
        img{
            width:25px;
            height:25px;
        }
    }
    @media screen and (max-width:650px){
        margin-top:20px;
    }

`
export const Footer_Details = styled.div`
    height:100%;
    flex:1;
    display:flex;
    justify-content:space-between;
    &>div{
        height:100%;
        flex:1;
        text-align:start;
        @media screen and (max-width:650px){
            margin-bottom:19px;
        }
        &>div{
            font-family: "Work Sans", serif;
            font-size:1.6em;
            font-weight:600; 
            color: #7B29DD;
            margin-bottom:20px;
            @media screen and (max-width:650px){
                margin-bottom:0px;
            }

        }
        p{
            font-family: "Work Sans",serif; 
            font-size:18px;
        }
    }
    @media screen and (max-width:650px){
        flex-direction:column;
    }
`