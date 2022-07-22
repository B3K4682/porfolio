import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { client } from "../utils/client";

const Banner = ({ bannerTexts }) => {
  const bannerText = bannerTexts[0];
  return (
    <div className="hero h-[940px] md-2x:h-[670px] xl:!h-[900px] xl-2x:!h-screen !relative">
      <div className="w-full h-full">
        <div className="block w-full h-full absolute left-0 top-0 z-[1] bg-cover bg-positioner justify-center items-center text-left md-2x:flex md-2x:items-center">
          <div className="container mx-auto md-2x:flex md-2x:justify-center">
            <div className="md-2x:gap-20 xl:!gap-[10rem] xl-2x:!gap-[13rem] flex flex-wrap md-2x:flex-nowrap items-center justify-center">
              <div className="pr-2 pl-2 max-w-full md-2x:w-[450px] xl-2x:!w-[600px] flex-auto-0 w-full">
                <div className="pb-0 text-center xl:text-left">
                  <div className="pt-[115px] lg:pt-[90px] md:pt-[130px]">
                    <h2 className="text-5xl mb-3 leading-[45px] lg:text-[65px] xl-2x:!text-[100px] xl-2x:!leading-[80px] lg:mb-[10px] lg:leading-[75px] text-white capitalize font-bold md:leading-[118%] md:mb-[10px] xl-2x:w-[110%]">
                      <span className="text-[35px] lg:text-[45px] md:text-[40px] xl-2x:!text-[70px] block text-[#ffe600]">
                        Hello,
                      </span>
                      {bannerText.helloText}
                    </h2>
                  </div>
                  <div>
                    <h5 className="text-[22px] mb-[10px] lg:text-[28px] font-semibold md:text-[32px] leading-[39px] text-[#59c378] md:mb-[20px] xl-2x:text-[33px]">
                      {bannerText.profession}
                    </h5>
                  </div>
                  <div className="pb-0 text-center xl:text-left xl-2x:justify-start flex justify-center">
                    <p className="text-white text-xl m-autoer max-w-lg">
                      {bannerText.description}
                    </p>
                  </div>
                  <div className="flex justify-center xl:justify-start">
                    <a
                      href="https://www.linkedin.com/in/beqa-jiqia-203092239/"
                      target={`_blank`}
                      className="btn"
                    >
                      {bannerText.buttonText} {` `} <AiOutlineArrowRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative rounded-full w-full mt-16 flex justify-center">
                <div className="relative">
                  <img
                    src="../logo.png"
                    alt="Beqa Jiqia"
                    className="!min-w-full rounded-full xl:!w-[480px]"
                  />
                  <div className="absolute top-[40px] left-[10px] bg-blue-100 rounded-3xl p-3">
                    <img src="./vscode.png" alt="VSCode" />
                  </div>
                  <div className="absolute top-[40px] right-[10px] bg-yellow-100 rounded-3xl p-3">
                    <img src="./javascript.png" alt="VSCode" />
                  </div>
                  <div className="absolute bottom-[40px] right-[45px] bg-[#6d52c5] rounded-3xl p-3">
                    <img src="./react.png" alt="VSCode" />
                  </div>
                  <div className="absolute bottom-[40px] left-[0px] bg-white rounded-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex items-center gap-2">
                    <FcApproval className="text-4xl" />
                    <div>
                      <h3 className="text-[20px] text-[#202020] mb-0">
                        {bannerText.finishedProjects}
                      </h3>
                      <p className="text-[15px] mb-0 text-[#585858]">
                        Complete Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-[1] ">
        <svg width={1038} height={938} fill="none">
          <g opacity={0.5} filter="url(#a)">
            <circle cx={290.5} cy={282.5} r={247.5} fill={`#FF4155`} />
          </g>
          <defs>
            <filter
              id="a"
              x={-457}
              y={-465}
              width={1495}
              height={1495}
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
                result="effect1_foregroundBlur_39_4392"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="hero-2-line">
        <svg width={1295} height={938} fill="none">
          <g opacity={0.4} filter="url(#b)">
            <circle cx={647.5} cy={561.5} r={247.5} fill={`#ffe600`} />
          </g>
          <defs>
            <filter
              id="b"
              x={0}
              y={-86}
              width={1295}
              height={1295}
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
                stdDeviation={200}
                result="effect1_foregroundBlur_39_4393"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute right-0 top-0 -z-[1]">
        <svg width={752} height={747} fill="none">
          <g opacity={0.45} filter="url(#c)">
            <circle cx={647.5} cy={99.5} r={247.5} fill={`#48c5ea`} />
          </g>
          <defs>
            <filter
              id="c"
              x={0}
              y={-548}
              width={1295}
              height={1295}
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
                stdDeviation={200}
                result="effect1_foregroundBlur_39_4394"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute left-0 bottom-0">
        <img src="https://elito-next.netlify.app/images/slider/line-1.png" />
      </div>
      <div className="absolute right-0 top-0">
        <img src="https://elito-next.netlify.app/images/slider/line-2.png" />
      </div>
    </div>
  );
};

export default Banner;
