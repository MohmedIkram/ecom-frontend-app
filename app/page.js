// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "next/image";
// import { Pagination } from 'swiper/modules';
import Product from "@/components/Product";

export default function Home() {
  const feature = {
    id: "Featured",
    name: "Featured",
    Data: [
      {
        name: "Women's Air Max",
        href: "#",
        imgSrc: "/nike-just-do-it.jpg",
        imageAlt:
          "Models sitting back to back, wearing Basic Tee in black and bone.",
      },
      {
        name: "Men's Air Max",
        href: "#",
        imgSrc: "/nike.jpg",
        imageAlt:
          "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
      },
      {
        name: "Kids's Air Max",
        href: "#",
        imgSrc: "/nike-just-do-it.jpg",
        imageAlt:
          "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
      },
    ],
  };
  // bg-[#f5f5f5]
  return (
    <main className="bg-white">
      <>
        <section className="relative">
          <Image src="/Running.avif" width={1920} height={853} alt="iamge" />
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="mb-4 text-4xl font-bold text-white">
              SUPERCOMFORT.
              <br /> SUPERNOVA.
            </h1>
            <p className="mb-6 text-lg text-white">
              Short description of your banner goes here.
            </p>
            <button className="px-4 py-2 font-bold text-black bg-white hover:bg-[#f5f5f5] rounded-3xl">
              Buy Now
            </button>
          </div>
        </section>
        <section className="pt-7">
          <h1 className="p-4 xl:text-2xl">Featured</h1>
          <div className="flex justify-around ">
            {feature.Data.map((item, key) => {
              return (
                <div key={key} className="w-[33%]">
                  <>
                    <Image
                      src={item.imgSrc}
                      alt={item.imageAlt}
                      width={599}
                      height={749}
                    />
                    <p className="p-4 text-black">{item.name}</p>
                  </>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h2>Just In</h2>
          <Product />
        </section>
        <section>
        {/* <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>Horizontal Slide 1</SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
            <SwiperSlide>Vertical Slide 3</SwiperSlide>
            <SwiperSlide>Vertical Slide 4</SwiperSlide>
            <SwiperSlide>Vertical Slide 5</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
        <SwiperSlide>Horizontal Slide 4</SwiperSlide>
      </Swiper> */}
    
        </section>
        <div className="bg-[#ede734] text-black flex text-center p-10 justify-center ">
          <p className="pr-6 text-3xl">JOIN ADIDAS AND GET 15% OFF</p>
          <button className="px-6 py-2 font-bold text-black bg-white hover:bg-[#f5f5f5] rounded-3xl">
            Buy Now
          </button>
        </div>
        <section className="bg-[#f5f5e5] text-black  w-full">
          <div className="xl:flex justify-center w-[90%] mx-auto py-24">
            <div className="w-full md:w-[50%]">
              <h1 className="text-3xl text-bold">
                STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
              </h1>
              <p className="w-[90%]">
                Sport keeps us fit. Keeps you mindful. Brings us together.
                Through sport we have the power to change lives. Whether it is
                through stories of inspiring athletes. Helping you to get up and
                get moving. Sportswear featuring the latest technologies, to up
                your performance. Beat your PB. adidas offers a home to the
                runner, the basketball player, the soccer kid, the fitness
                enthusiast. The weekend hiker that loves to escape the city. The
                yoga teacher that spreads the moves. The 3-Stripes are seen in
                the music scene. On stage, at festivals. Our sports clothing
                keeps you focused before that whistle blows. During the race.
                And at the finish lines. We’re here to support creators. Improve
                their game. Their lives. And change the world.
                <br />
                <br />
                adidas is about more than sportswear and workout clothes. We
                partner with the best in the industry to co-create. This way we
                offer our fans the sports apparel and style that match their
                athletic needs, while keeping sustainability in mind. We’re here
                to support creators. Improve their game. Create change. And we
                think about the impact we have on our world.
              </p>
            </div>
            <div className="w-full md:w-[50%]">
              <h2 className="text-3xl text-bold">
                WORKOUT CLOTHES, FOR ANY SPORT
              </h2>
              <p className="w-[90%]">
                adidas designs for and with athletes of all kinds. Creators, who
                love to change the game. Challenge conventions. Break the rules
                and define new ones. Then break them again. We supply teams and
                individuals with athletic clothing pre-match. To stay focussed.
                We design sports apparel that get you to the finish line. To win
                the match. We support women, with bras and tights made for
                purpose. From low to high support. Maximum comfort. We design,
                innovate and itterate. Testing new technologies in action. On
                the pitch, the tracks, the court, the pool. Retro workout
                clothes inspire new streetwear essentials. Like NMD, Ozweego and
                our Firebird tracksuits. Classic sports models are brought back
                to life. Like Stan Smith. And Superstar. Now seen on the streets
                and the stages.
                <br />
                <br />
                Through our collections we blur the borders between high fashion
                and high performance. Like our adidas by Stella McCartney
                athletic clothing collection – designed to look the part inside
                and outside of the gym. Or some of our adidas Originals
                lifestyle pieces, that can be worn as sportswear too. Our lives
                are constantly changing. Becoming more and more versatile. And
                adidas designs with that in mind.
              </p>
            </div>
          </div>
        </section>
      </>
    </main>
  );
}
