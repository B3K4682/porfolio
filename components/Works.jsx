import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { urlFor } from "../utils/client";

const Works = ({ portfolio }) => {
  return (
    <div
      className="relative py-[120px] overflow-hidden bg-[#191919] z-[1]"
      id="portfolio"
    >
      <div className="container mx-auto xl-2x:max-w-[1320px]">
        <div className="flex justify-center flex-wrap">
          <div className="flex-auto-0 w-full max-w-full px-[11.25px]">
            <div className="mb-[60px] md:mb-10 text-center">
              <h2 className="capitalize text-[32px] leading-[40px] md:text-[35px] smxl:text-[48px] md:leading-[55px] font-bold text-white inline-block pb-5 relative mt-[10px] mx-0 mb-0">
                Recent Work.
              </h2>
              <p className="text-[18px] text-[#d8d8d8] mb-0">
                Projects I've created from scratch.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[560px] md-2x:!max-w-full">
          <Swiper
            modules={[Pagination]}
            spaceBetween={15}
            slidesPerView={`auto`}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              771: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            pagination={{ clickable: true }}
          >
            {portfolio.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <div className="group overflow-hidden relative">
                    <img
                      src={urlFor(item.banner)
                        .width(600)
                        .height(600)
                        .fit("fill")
                        .url()}
                      className="transition-all duration-300 scale-[1] w-full group-hover:scale-[1.2] align-text-top"
                    />
                  </div>
                  <div className="pt-[30px] ">
                    <h2 className="text-xl leading-[30px] smxl:text-[25px] smxl:leading-[35px] cursor-pointer font-semibold text-white mb-2 hover:text-[#59c378] transition-all">
                      {item.siteLink ? (
                        <a href={`${item.siteLink}`} target={`_blank`}>
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </h2>
                    <span className="font-normal text-[14px] leading-[30px] text-[#d8d8d8]">
                      {item.technologies}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute top-1/2 left-[30%] -z-[1] translate-center">
        <svg width={1325} height={1687} fill="none">
          <g filter="url(#largerer)">
            <circle
              cx={481.5}
              cy={843.5}
              r={343.5}
              fillOpacity={0.27}
              fill={`#ffe500`}
            />
          </g>
          <defs>
            <filter
              id="largerer"
              x={-362}
              y={0}
              width={1687}
              height={1687}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={250}
                result="effect1_foregroundBlur_39_4166"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute left-0 bottom-0 -z-[1]">
        <img src="https://elito-next.netlify.app/images/project/line-1.png" />
      </div>
      <div className="absolute right-0 top-0 -z-[1]">
        <img src="https://elito-next.netlify.app/images/project/line-2.png" />
      </div>
    </div>
  );
};

export default Works;
