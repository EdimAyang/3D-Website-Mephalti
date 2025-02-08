import React from 'react'
import { Hero_Home, HomeStyles, Hero_Design, Hero_Text, Hero_Headings, Hero_para, Hero_Image, Features_section, Features_Texts, Features_Image, Features_Heading, Features_Dis, Product_Section,  About_Section, Product_Gallary, Gallary_Wrapper, Card1, Card2,Card3, Card4, Card5, Card6, Testimonial_Section, Testimonial_Card, News_Updates, News_Email_Wrapper, News_Input_Wrapper, Button_Wrapper } from './Style'
import Nav from '../../components/navbar/Nav'
import { Button } from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Autoplay } from 'swiper/modules';


const Home = () => {
  return (
    <HomeStyles>
      <Hero_Home >
        <Nav />
        {/* <img src="/public/vectors/Ellipse 1.svg" alt="" /> */}
        <Hero_Design>
            <Hero_Text>
              <Hero_Headings>
                Comfort<br /> awaits <span>everyday</span>
              </Hero_Headings>
                <Hero_para>
                  <p>Comfort awaits everyday Production and sale of the best shoe of various types for
                    tour travel lovers. Feel the tightness and comfort of these items.Open Catalog
                  </p>
                </Hero_para>
              <Button 
// @ts-ignore
              large = {"150px"}>
                create
              </Button>
            </Hero_Text>
            <Hero_Image>
              <img src="assets/shoes_image_1 1.png" alt="" />
            </Hero_Image>
        </Hero_Design>
      </Hero_Home>
      <Features_section>
        <Features_Texts>
          <Features_Heading>
            Know about best <span>feauture<br/> in shoes.</span>
          </Features_Heading>
          <Features_Dis>
            <div>
              <img src="assets/Group 9 (2).png" alt="" />
              <div>
                <div>Best Quality Shoes</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
            <div>
              <img src="assets/Group 10.png" alt="" />
              <div>
                <div>Long Lasting Shoes</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
            <div>
              <img src="assets/Group 11 (2).png" alt="" />
              <div>
                <div>Best Price Range</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting             industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
          </Features_Dis>
        </Features_Texts>
        <Features_Image>
          <img src="assets/pngwing 1.png" alt="" />
        </Features_Image>
      </Features_section>
      <Product_Section>
        <div>
          <div>A <span>top-selling</span> product</div>
          <p>Lorem Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s,</p>
        </div>
        <section>
          <Swiper
          slidesPerView={1}
          autoplay={
            {
              delay:2500,
              disableOnInteraction: false,
            }
          }
          loop={true}
          spaceBetween={80}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          >
            <SwiperSlide className='s1'>
              <img src="assets/pngwing 2.png" alt="" />
              <div>
                <div>Nike Sheos Air Max</div>
                <p>Price $150</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='s2'>
              <img src="assets/pngwing 3 (2).png" alt="" />
              <div>
                <div>Nike Sheos Air Max</div>
                <p>Price $150</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='s3'>
              <img src="assets/pngwing 4.png" alt="" />
              <div>
                <div>Nike Sheos Air Max</div>
                <p>Price $150</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='s4'>
              <img src="/src/assets/pngwing 5.png" alt="" />
              <div>
                <div>Nike Sheos Air Max</div>
                <p>Price $150</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </Product_Section>
      <About_Section>
        <img src="assets/Ellipse 3 (2).png" alt="" />
        <div><img src="assets/5 1.png" alt="" /></div>
        <section>
          <div>About US</div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
      </About_Section>
      <Product_Gallary>
        <div>
          <div>Our <span>favourite</span> collections</div>
          <p>Lorem Ipsum is simply dummy text of the printi and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy
             text ever since the 1500s,</p>
        </div>
        <Gallary_Wrapper>
          <Card1><img src="assets/Rectangle 4 (1).png" alt="" /></Card1>
          <Card2><img src="assets/Rectangle 7 (1).png" alt="" /></Card2>
          <Card3><img src="assets/Rectangle 8.png" alt="" /></Card3>
          <Card4><img src="assets/Rectangle 9.png" alt="" /></Card4>
          <Card5><img src="assets/Rectangle 5.png" alt="" /></Card5>
          <Card6><img src="assets/Rectangle 6.png" alt="" /></Card6>
        </Gallary_Wrapper>
      </Product_Gallary>
      <Testimonial_Section>
        <div>
          <div>What <span>our customers</span> says</div>
          <p>Lorem Ipsum is simply dummy text of the printi and 
            typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, </p>
        </div>
        <Testimonial_Card>
          <img src="assets/Ellipse 6 (2).png" alt="" />
          <div>Emmanuel Ayang</div>
          <p>“
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.....</p>
        </Testimonial_Card>
      </Testimonial_Section>
      <News_Updates>
        <div><img src="assets/6 1.png" alt="" /></div>
        <News_Email_Wrapper>
          <News_Input_Wrapper>
            <div>Let us send you offer</div>
            <Button_Wrapper>
              <input type="text" placeholder='Input your email address in here'/>
              <button><img src="/vectors/Frame.svg" alt="" /></button>
            </Button_Wrapper>
          </News_Input_Wrapper>
          <div><img src="assets/1 1.png" alt="" /></div>
        </News_Email_Wrapper>
      </News_Updates>
      <Footer />
    </HomeStyles>
  )
}

export default Home
