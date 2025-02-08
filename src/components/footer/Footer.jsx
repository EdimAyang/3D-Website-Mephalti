import React from 'react'
import { Footer_Details,Footer_Logo_Wrapper, FooterStyles } from './Style'

const Footer = () => {
  return (
    <FooterStyles>
        <Footer_Logo_Wrapper>
            <img src="/public/Mephalti 3D.svg"alt="" />

            <div>
                <img src="icons/Group 50.svg" alt="" />
                <img src="icons/Group 51.svg" alt="" />
                <img src="icons/Group 52.svg" alt="" />
                <img src="icons/Group 53.svg" alt="" />
            </div>
        </Footer_Logo_Wrapper>
        <Footer_Details>
            <div>
              <div>About</div><br />
              <p>Menu</p><br/>
              <p>New & Blog</p><br />
              <p>Features</p><br />
              <p>Help & Support</p>
            </div>
            <div>
            <div>Company</div><br />
                <p>How We Work</p><br/>
                <p>Terms of service</p><br />
                <p>Pricing</p><br />
                <p>FAQs</p>
            </div>
            <div>
            <div>Contact Us</div><br />
                <p>Usalu Benin City</p><br/>
                <p>+234-9136794977</p><br />
                <p>jacksonprince590@gmail.com</p><br />
                <p>www.mephalti.com</p>
            </div>
        </Footer_Details>
    </FooterStyles>
  )
}

export default Footer
