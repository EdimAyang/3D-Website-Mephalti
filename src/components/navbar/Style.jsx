import styled from "styled-components";

export const Navbar = styled.nav`
//large screens
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
    background-image:url("vectors/Ellipse 1.svg");
    background-color:#F6F4ED;
    background-repeat:no-repeat;
    img{
      transform:scale(0.7);
    }

//laptops
    @media screen and (max-width:1440px){
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
        background-image:url("vectors/Ellipse 1.svg");
        background-color:#F6F4ED;
        background-repeat:no-repeat;
        img{
          transform:scale(0.7);
        }
    }

//tablet
@media screen and (max-width:1024px){
    
}

//mobile phones
    @media screen and (max-width:600px){
        height:50px;
        padding-left:0px;
        padding-right:0px;
        padding:10px;
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
//large screens
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

//laptop
@media screen and (max-width:1440px){
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
}

//tablet
@media screen and (max-width:1024px){
    width: 100%;
    height:${({
// @ts-ignore
    active}) => active ? "300px" : "0px" }; 
    left:0;
    top:50px;
    position:absolute;
    background-image:url("vectors/Ellipse 1.svg");
    background-color:#F6F4ED;
    background-repeat:no-repeat;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition-duration:0.8s;
    z-index:100;
    visibility:${({
// @ts-ignore
    active})=>active ? "show" : "hidden"};

    a{
       text-decoration:none;
       font-size:20px;
       cursor: pointer;
       padding: 10px;
       color:#ffff;
       visibility:${({
// @ts-ignore
       active})=>active ? "show" : "hidden"};
    }
}

//mobile phone
    @media screen and (max-width:600px){
    width: 100%;
    height:${({
// @ts-ignore
    active}) => active ? "300px" : "0px" }; 
    left:0;
    top:50px;
    position:absolute;
    background-image:url("vectors/Ellipse 1.svg");
    background-color:#F6F4ED;
    background-repeat:no-repeat;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition-duration:0.8s;
    z-index:100;
    visibility:${({
// @ts-ignore
    active})=>active ? "show" : "hidden"};

    a{
       text-decoration:none;
       font-size:20px;
       cursor: pointer;
       padding: 10px;
       color:#ffff;
       visibility:${({
// @ts-ignore
       active})=>active ? "show" : "hidden"};
    }
}


`
export const Bars = styled.img`
//large screens
    width:35px;
    height:35px;
    cursor: pointer;
    display:none;

//laptop
@media screen and (max-width:1440px){
    width:35px;
    height:35px;
    cursor: pointer;
    display:none;
}

//tablet
@media screen and (max-width:1024px){
 display:block;
 animation:logo 0.9s ease-in 
alternate-reverse infinite;

    @keyframes logo {
    0%{transform:scale(0.7);}
    100%{transform:scale(0.5);}
}
}



//mobile phones
    @media screen and (max-width:600px){
        display:block;
        animation:logo 0.9s ease-in alternate-reverse infinite;

    @keyframes logo {
    0%{transform:scale(0.7);}
    100%{transform:scale(0.5);}
}
        
    }
`