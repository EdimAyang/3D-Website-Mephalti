import styled from "styled-components";


export const HomeStyles = styled.div`
    width:100%;
    height:100vh;
    background-color:#F6F4ED;
    @media screen and (max-width:650px){
        z-index:0;
    }
`

export const Hero_Home = styled.header`
    width:100%;
    height:700px;
    background-color:#F6F4ED;
    background-image:url("/public/vectors/Ellipse 1.svg");
    background-repeat:no-repeat;
    position:relative;
    top:5%;

    @media screen and (max-width:650px){
       height:900px;
       width:100%;
        top:5%;
    }
`
export const Hero_Design = styled.div`
margin-left:93px;
margin-top:20px;
height:613px;
width:1579px;
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
@media screen and (max-width:650px){
    width:100%;
    margin:0;
    height:800px;
    flex-direction:column;
}
`
export const Hero_Text = styled.div`
    width:635px;
    height:348px;
    @media screen and (max-width:650px){
        width:100%;
        height:480px;
        padding:30px;
        text-align:center;
    }
`
export const Hero_Headings = styled.div`
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
    @media screen and (max-width:650px){
        width:100%;
        height:250px;
        text-align:center;
        padding:10px;
    }
`
export const Hero_para = styled.div`
  height:59px;
  width:100%; 
  margin-bottom:33px;
  color:#1E1E1E;
font-family: "Work Sans", serif;
font-size:1em;
line-height:1.2em;

`
export const Hero_Image = styled.div`
   height:613px;
   width:100%;
   @media screen and (max-width:650px){
    img{
        width:100%;
        height:100%;
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
    @media screen and (max-width:650px){
        width:100%;
        flex-direction:column;
        height:1300px;
        margin:0;
        position:relative;
        top:5%;
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
    @media screen and (max-width:650px){
        width:100%;

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
     @media screen and (max-width:650px){
        height:150px;
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
            margin-bottom:5%;
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
            justify-content:space-between;
            padding:10px;
            @media screen and (max-width:650px){
                padding:5px;
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
    background-image:url("/src/assets/Ellipse 3.png");
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
   
    gap:10%;
    @media screen and (max-width:650px){
        gap:10%;
    }
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
    @media screen and (max-width:650px){
        width:100%;
        margin:0;
        height:640px;
        position:relative;
        top:5%;
    }
    &>div{
        width:100%;
        text-align:center;
        padding:10px;
        @media screen and (max-width:650px){
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
background: hsla(267, 73%, 51%, 1);
background: linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

background: -moz-linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

background: -webkit-linear-gradient(135deg, hsla(267, 73%, 51%, 1) 0%, hsla(46, 100%, 50%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#7B29DD", endColorstr="#FDC400", GradientType=1 );
margin-top:20%;
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
    @media screen and (max-width:650px){
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
    @media screen and (max-width:650px){
        height:460px;
        width:100%;
        text-align:center;
        margin-bottom:10px;
    }
    &>div{
        color:#ffff;
        font-family: "Work Sans",
        serif;
        font-size:2.6em; 
    }
    p{
        font-family: "Work Sans",serif;
        font-size:16px;
        line-height:1.5em;
        color:#ffff;
    }
}

@media screen and (max-width:650px){
    flex-direction:column;
    padding:10px;
   height:790px;
    margin-top:50%;
    &>img{
        display:none;
    }
}
`
export const Product_Gallary = styled.section`
display:flex;
flex-direction:column;
gap:30px;
width:85%;
height:1180px;
margin:0 auto;
margin-top:10%;
position:relative;
top:5%;
@media screen and (max-width:650px){
    width:100%;
    height:3310px;

}
&>div{
    width:80%;
    height:144px;
    text-align:center;
    margin:0 auto;
    padding:10px;
    @media screen and (max-width:650px){
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
    @media screen and (max-width:650px){
        grid-template-columns:repeat(1,1fr);
        padding:20px;
    }
`
export const Card1 = styled.div`
    grid-column:1/2;
    @media screen and (max-width:650px){
        grid-column:1/2;
    }
`
export const Card2 = styled.div`
    grid-column:2/3;
    @media screen and (max-width:650px){
    grid-column:1/2;
}
`
export const Card3 = styled.div`
    grid-column:3/4;
    @media screen and (max-width:650px){
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
height:400px;
margin:0 auto;
margin-top:10%;
position:relative;
top:5%;
@media screen and (max-width:650px){
    width:100%;
    height:800px;
}
&>div{
    width:80%;
    height:144px;
    text-align:center;
    margin:0 auto;
    margin-bottom:80px;
    padding:10px;
    @media screen and (max-width:650px){
    width:100%;
    height:340px;
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
export const Testimonial_Card = styled.section`
width:100%;
height:192px ;
background-image:url("/src/assets/Rectangle 10 (1).png");
background-repeat:no-repeat;
background-position:center;
background-size:100;
position:relative;
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
@media screen and (max-width:650px){
    height:450px;
    padding:20px;
    background-size:cover;
}
img{
    position:absolute;
    top:-60px;
    left:45%;
    @media screen and (max-width:650px){
    left:40%;
}
}
&>div{
    text-align:center;
    color:#1E1E1E;
    font-family: "Work Sans", serif;
    font-size:1.6em;
    font-weight:600;

}
p{
    line-height:1.3em;
    padding:15px;
    color:#1E1E1E;
    font-family: "Work Sans", serif;
    @media screen and (max-width:650px){
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
    margin-top:20%;
    display:flex;
    justify-content:space-between;
    gap:20px;

    &>div{
        height:100%;
        width:20%;
        position:relative;
        img{
            position:absolute;
            top:-40%;
            left:0;
        }
        @media screen and (max-width:650px){
    display:none;
}
    }
    @media screen and (max-width:650px){
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
   @media screen and (max-width:650px){
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
}
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


