import styled from "styled-components";


export const HomeStyles = styled.div`
//larger screens
    width:100%;
    height:100vh;
    background-color:#F6F4ED;

//laptops
@media screen and (max-width:1440px){

}

//tablet
@media screen and (max-width:1024px){

}

    //mobile
    @media screen and (max-width:300px){
        z-index:0;
    }
`

export const Hero_Home = styled.header`
//larger screens
    width:100%;
    height:700px;
    background-color:#F6F4ED;
    background-image:url("vectors/Ellipse 1.svg");
    background-repeat:no-repeat;
    position:relative;
    top:5%;

    //laptops
@media screen and (max-width:1440px){
    top:4%;
}

//tablet
@media screen and (max-width:1024px){
    top:5%;
    height:1020px;
}


//mobile
    @media screen and (max-width:300px){
       height:850px;
       width:100%;
        top:5%;
    }
`
export const Hero_Design = styled.div`
//larger screens
margin-left:93px;
margin-top:20px;
height:613px;
width:1579px;
display:flex;
justify-content:space-between;
align-items:center;
position:relative;


//tablet
@media screen and (max-width:1024px){
flex-direction:column;
width:100%;
margin:0;
height:700px;
}

//mobile
@media screen and (max-width:600px){
    width:100%;
    margin:0;
    height:100%;
    flex-direction:column;
}
`
export const Hero_Text = styled.div`
    width:635px;
    height:348px;

//tablet
@media screen and (max-width:1024px){
    width:100%;
    padding:40px;
    height:790px;
    text-align:center;
}
    @media screen and (max-width:600px){
        width:100%;
        height:480px;
        padding:20px;
        text-align:center;
    }
`
export const Hero_Headings = styled.div`
//larger screens
    width:580px;
    height:172px;
    margin-bottom:36px;
    color:#1E1E1E;
    font-family: "Work Sans", serif;
    font-size:4em;
    font-weight:600;
    span{
        color:#7B29DD;
    }


//tablet
@media screen and (max-width:1024px){
    width:100%;
    height:170px;
    text-align:center;
    padding:10px;
    margin-bottom:20px;
}
    @media screen and (max-width:600px){
        width:100%;
        height:260px;
        text-align:center;
        padding:10px;
        font-size:4em;
    }
`
export const Hero_para = styled.div`
//larger screens
  height:59px;
  width:100%; 
  margin-bottom:33px;
  color:#1E1E1E;
font-family: "Work Sans", serif;
font-size:1em;
line-height:1.2em;
margin-bottom:20px;


//tablet
@media screen and (max-width:1024px){
    width:90%;
    text-align:center;
    margin-bottom:20px;
    margin:0 auto;
}

//mobile
@media screen and (max-width:600px){
width:100%;
font-size:0.9em;
}



`
export const Hero_Image = styled.div`
//larger screens
   height:613px;
   width:100%;
   animation:Heros 2s ease-in-out 0s alternate-reverse infinite;
   @keyframes Heros{
    0%{transform:translateX(0%);};  
    100%{transform:rotate(5deg) translateX(15%);}
   }

//tablet
@media screen and (max-width:1024px){
    height:713px;
    width:100%;

    img{
    width:100%;
    height:100%;
    @keyframes Heros{
    0%{transform:translateX(25%);};
    100%{transform:rotate(-1deg) translateX(2%)}
}
}
   

}

//mobile
   @media screen and (max-width:600px){
    img{
        width:100%;
        height:100%;
        @keyframes Heros{
        0%{transform:translateX(25%);};
        100%{transform:rotate(-1deg) translateX(2%)}
    }
    }
   }
`
//Features section

export const Features_section = styled.section`
    width:85%;
    height:615px;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
    position:relative;
    top:5%; 
    margin-top:20%;

    //tablet
@media screen and (max-width:1024px){
    flex-direction:column;
    height:1300px;
    
}

//mobile
    @media screen and (max-width:600px){
        width:100%;
        flex-direction:column;
        height:1500px;
        margin:0;
        position:relative;
        top:5%;
        margin-top:50%;
        gap:90px;
    }
`
export const Features_Texts = styled.div`
    width:580px;
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
    gap:35px;


    
    @media screen and (max-width:600px){
        width:100%;
        gap:70px;
    }
`
export const Features_Heading =  styled.div`
    width:100%;
    height:114px;
    color:#1E1E1E;
    font-family: "Work Sans", serif;
    font-size:2.6em;
    font-weight:600;
    span{
        color:#7B29DD;
    }


    //tablet
@media screen and (max-width:1024px){
text-align:center;
}

//mobile
     @media screen and (max-width:600px){
        height:190px;
        text-align:center;
     }
`
export const Features_Dis = styled.div`
    flex:1;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    @media screen and (max-width:650px){
        padding:10px;
        
    }
    &>div{
        width:100%;
        height:115px;
        display:flex;
        align-items:center;
        gap:20px;
        margin-bottom:2%;
        @media screen and (max-width:650px){
            height:145px;
            margin-bottom:10%;
        }
        img{
            background-color:#FDC400;
            height:70%;
            padding:10px;
            @media screen and (max-width:650px){
                height:60%;
            }
        }
        &>div{
            height:100%;
            flex:1;
            display:flex;
            flex-direction:column;
            /* justify-content:space-between; */
            gap:20px;
            padding:10px;
            @media screen and (max-width:650px){
                padding:5px;
                gap:15px;
            }

            &>div{
                font-size:1.5em;
                color:#1E1E1E;
                font-family: "Work Sans", serif;
                font-weight:bold;
            }
            p{
                color:#1E1E1E;
                font-family: "Work Sans", serif;
                font-size:16px;
                line-height:1.2em;
            }
        }
    }
`
export const Features_Image = styled.div`
    width:517px;
    height:100%;
    background-image:url("assets/Ellipse 3.png");
    background-position:top;
    background-repeat:no-repeat;
    position:relative;
    img{
        position:absolute;
        top:10%;
        
    }
    @media screen and (max-width:650px){
        width:100%;
        img{
            width:100%;
        }
    }
`
export const Product_Section = styled.section`
    width:85%;
    height:511px;
    margin:80px auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    position:relative;
    top:5%;
    margin-top:30%;
    gap:10%;
    
    &>section{
        width:100%;
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
        @media screen and (max-width:650px){
            width:80%;
            margin:0 auto;
        }
    }
    .swiper{
        width:100%;
        height:100%;
        padding:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        position: relative;
        padding-top:70px;

        .swiper-slide{
        width:280px;
        background-color:#DBEFFF;
        height:100%;
        position:relative;
        display:flex;
        justify-content:center;
        align-items:end;
        padding:20px;
        img{
            position:absolute;
            top:-30%;
        }
        &>div{
            width:100%;
            text-align:center;
            color:#1E1E1E;
            font-family: "Work Sans",
            serif;
            font-size:20px;
            line-height:1.5em;
            }
            p{
                font-weight:bold;
                font-size:16px;
            }
    
       }
    }



//tablet
@media screen and (max-width:1024px){
    width:90%;
    height:600px;

    .swiper-slide{
width:280px;
background-color:#DBEFFF;
height:50%;
position:relative;
display:flex;
justify-content:center;
align-items:end;
padding:20px;
img{
    position:absolute;
    top:-50%;
    width:100%;
}
&>div{
    width:100%;
    text-align:center;
    color:#1E1E1E;
    font-family: "Work Sans",
    serif;
    font-size:2.5rem;
    line-height:1.5em;
    }
    p{
        font-weight:bold;
        font-size:1.5rem;
    }

}
}


//mobile
    @media screen and (max-width:600px){
        width:100%;
        margin:0;
        height:640px;
        position:relative;
        top:5%;
        margin-top:50%;
    }
    &>div{
        width:100%;
        text-align:center;
        padding:10px;
        @media screen and (max-width:600px){
            width:100%;
            margin:0;
        }
        &>div{
            color:#1E1E1E;
            font-family: "Work Sans", serif;
            font-size:2.6em;
            font-weight:600;
            margin-bottom:30px;
            span{
                color:#7B29DD;
            }
        }
        p{
            color:#1E1E1E;
            font-family: "Work Sans",serif;
            font-size:16px;
            line-height:1.5em;

        }
    }
`
export const About_Section = styled.section`
width:100%;
height:541px;
display:flex;
align-items:center;
padding-left:5%;
padding-right:5%;
position:relative;
top:5%;
/* margin-bottom:150px; */
background: hsla(267, 73%, 51%, 1);
background: linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

background: -moz-linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

background: -webkit-linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#7B29DD", endColorstr="#FDC400", GradientType=1 );
margin-top:35%;
position:relative;
&>img{
position:absolute;
left:0px;
top:-60%;
}


&>div{
    width:580px;
    height:100%;
    position:relative;
    img{
        position:absolute;
        top:-30%;
    }

    
//tablet
@media screen and (max-width:1024px){
    img{
        width:120%;
        top:-90px;
    }
}


//mobile
    @media screen and (max-width:600px){
        img{
            width:60%;
            left:26%;
        }
    }
}
section{
    width:580px;
    height:369px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:15px;


    //tablet
@media screen and (max-width:1024px){
    height:100%;
    &>div{
        text-align:center;
    }
}

//mobile
    @media screen and (max-width:600px){
        height:460px;
        width:100%;
        text-align:center;
        margin-bottom:15%;
    }
    &>div{
        color:#ffff;
        font-family: "Work Sans",
        serif;
        font-size:2.6em; 
        @media screen and (max-width:600px){
            padding:10px;
        }
    }
    p{
        font-family: "Work Sans",serif;
        font-size:16px;
        line-height:1.5em;
        color:#ffff;
    }
}

//tablet
@media screen and (max-width:1024px){
padding:30px;
margin-top:70%;
}

//mobile
@media screen and (max-width:600px){
    flex-direction:column;
    padding:10px;
   height:790px;
    margin-top:98%;
    &>img{
        display:none;
    }
}
`
export const Product_Gallary = styled.section`
display:flex;
flex-direction:column;
gap:90px;
width:85%;
height:1280px;
margin:0 auto;
margin-top:30%;
position:relative;
top:5%;


//tablet
@media screen and (max-width:1024px){
    width:90%;
    height:1760px;
}


//mobile
@media screen and (max-width:600px){
    width:100%;
    height:3310px;
    margin-top:50%;
}
&>div{
    width:80%;
    height:144px;
    text-align:center;
    margin:0 auto;
    padding:10px;
    @media screen and (max-width:600px){
        width:100%;
        height:200px;
    }
    &>div{
        color:#1E1E1E;
        font-family: "Work Sans", serif;
        font-size:2.6em;
        font-weight:600;
        margin-bottom:30px;
        span{
            color:#7B29DD;
        }
    }
    p{
        color:#1E1E1E;
        font-family: "Work Sans",serif;
        font-size:16px;
        line-height:1.5em;
    }
}
`
export const Gallary_Wrapper = styled.section`
    flex:1;
    width:100%;
    display:grid;
    grid-template-columns:repeat(3, 1fr );
    grid-auto-rows:486px;
    gap:20px;
    padding:10px;
    img{
        width:100%;
        height:100%;
    }


    //tablet
@media screen and (max-width:1024px){
    width:100%;
    flex:1;
    grid-template-columns:repeat(2, 1fr );
    grid-auto-rows:486px;
    gap:20px;
    padding:10px;
    img{
        width:100%;
        height:100%;
    }
}


//mobile
    @media screen and (max-width:600px){
        grid-template-columns:repeat(1,1fr);
        padding:20px;
        margin-bottom:150px;
    }
`
export const Card1 = styled.div`
    grid-column:1/2;

//tablet
@media screen and (max-width:1024px){
    grid-column:1/2;
}

//mobile
    @media screen and (max-width:600px){
        grid-column:1/2;
    }
`
export const Card2 = styled.div`
    grid-column:2/3;

//tablet
    @media screen and (max-width:1024px){
    grid-column:2/3;
}

//mobile
    @media screen and (max-width:600px){
    grid-column:1/2;
}
`
export const Card3 = styled.div`
    grid-column:3/4;

//tablet
@media screen and (max-width:1024px){
    grid-column:1/2;
}

//mobile
    @media screen and (max-width:600px){
    grid-column:1/2;
}
`
export const Card4 = styled.div`
    
    
`
export const Card5 = styled.div`
   
   
`
export const Card6 = styled.div`
    
    
`
export const Testimonial_Section = styled.section`
width:70%;
height:700px;
margin:0 auto;
margin-top:30%;
position:relative;
top:5%;

//tablet
@media screen and (max-width:1024px){
    width:80%;
    height:750px;
}

//mobile
@media screen and (max-width:600px){
    width:100%;
    height:800px;
    margin-top:60%;
}
&>div{
    width:80%;
    height:144px;
    text-align:center;
    margin:0 auto;
    padding:10px;


    //tablet
    @media screen and (max-width:1024px){
    margin-bottom:30%;
}

//mobile
    @media screen and (max-width:600px){
    width:100%;
    height:340px;
}
    &>div{
        color:#1E1E1E;
        font-family: "Work Sans", serif;
        font-size:2.6em;
        font-weight:600;
        margin-bottom:0px;
        span{
            color:#7B29DD;
        }
        @media screen and (max-width:600px){margin-bottom:25px;}
    }
    p{
        color:#1E1E1E;
        font-family: "Work Sans",serif;
        font-size:16px;
        line-height:1.5em;
    }
}
`
export const Testimonial_Card = styled.section`
width:100%;
height:290px ;
position:relative;
padding:40px;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-top:15%;
box-shadow:0px 0px 40px rgba(0 ,0, 0 ,0.2);
@media screen and (max-width:600px){
    height:350px;
    padding:20px;
    background-color:#FDC400;
    text-align:center;
}
img{
    position:absolute;
    top:-60px;
    left:45%;
    @media screen and (max-width:600px){
    left:40%;
}
}
&>div{
    text-align:center;
    color:#1E1E1E;
    font-family: "Work Sans", serif;
    font-size:1.6em;
    font-weight:600;
    @media screen and (max-width:600px){margin-top:30px;}

}
p{
    line-height:1.3em;
    padding:15px;
    color:#1E1E1E;
    font-family: "Work Sans", serif;
    @media screen and (max-width:600px){
    padding:25px;
}
}
`
export const News_Updates = styled.section`
    height:317px;
    width:100%;
    position:relative;
    top:5%;
    background: hsla(267, 73%, 51%, 1);
    background: linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

    background: -moz-linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

    background: -webkit-linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#7B29DD", endColorstr="#FDC400", 
    GradientType=1 );
    margin-top:30%;
    display:flex;
    justify-content:space-between;
    gap:20px;

//tablet
    @media screen and (max-width:1024px){
        padding-left:20px;
    &>div{
        img{
            display:none;
        }
    }
}

//mobile
    @media screen and (max-width:600px){margin-top:50%;}
    &>div{
        height:100%;
        width:20%;
        position:relative;
        img{
            position:absolute;
            top:-40%;
            left:0;
        }

     //tablet
    @media screen and (max-width:1024px){
        display:none;
    }
    
    
    //mobile
        @media screen and (max-width:600px){
    display:none;
}
    }
    @media screen and (max-width:600px){
  img{
    display:none;
  }
}
`
export const News_Email_Wrapper = styled.section`
   width:70%;
   height:80%;
   display:flex;
   justify-content:space-between;


//tablet
   @media screen and (max-width:1024px){
    width:100%;
}

//mobile
   @media screen and (max-width:600px){
    width:100%;
}
`
export const News_Input_Wrapper = styled.div`
    padding:10px;   
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    &>div{
        padding-top:20px;
    text-align:center;
    color:#fff;
    font-family: "Work Sans", serif;
    font-size:2.6em;
    font-weight:600;

    //tablet
@media screen and (max-width:1024px){
    text-align:start;
}
}

//mobile
@media screen and (max-width:650px){
    width:100%;
}
`
export const Button_Wrapper = styled.div`
    width:100%;
    height:70%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    input{
        width:86%;
        height:74px;
        padding:15px;
        outline:none;
        background: hsla(267, 73%, 51%, 1);
        background: linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, 
        hsla(46, 100%, 50%, 1) 100%);
        background: -moz-linear-gradient(135deg, hsla(267, 73%, 51%, 1)
        0%, hsla(46, 100%, 50%, 1) 100%);
        background: -webkit-linear-gradient(135deg, hsla(267, 73%, 51%,
        1) 0%, hsla(46, 100%, 50%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( 
        startColorstr="#7B29DD", endColorstr="#FDC400", 
        GradientType=1 );
        border:none;
        color:#fff;
        font-family: "Work Sans", serif;
    }
    input::placeholder{
        color:#1E1E1E;
        font-family: "Work Sans", serif;
    }
    &>button{
        flex:1;
        height:74px;
        background-color:#ffff;
        border:none;
        cursor:pointer;
        img{
            width:40px;
            height:40px;
        }
        @media screen and (max-width:650px){
    display:flex;
    align-items:center;
}
    }
    @media screen and (max-width:650px){
    img{
        display:block;
    }
    padding:20px;
}

`


