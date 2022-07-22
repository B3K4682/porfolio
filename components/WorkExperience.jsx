import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { urlFor } from "../utils/client";

const WorkExperience = ({ experiences }) => {
  return (
    <div
      className="relative py-[120px] overflow-hidden bg-[#191919] z-[1]"
      id="work-experience"
    >
      <div className="container mx-auto xl-2x:max-w-[1320px]">
        <div className="flex justify-center flex-wrap">
          <div className="flex-auto-0 w-full max-w-full px-[11.25px]">
            <div className="mb-[60px] md:mb-10 text-center">
              <h2 className="capitalize text-[32px] leading-[40px] md:text-[35px] smxl:text-[48px] md:leading-[55px] font-bold text-white inline-block pb-5 relative mt-[10px] mx-0 mb-0">
                My work experience
              </h2>
              <p className="text-[18px] text-[#d8d8d8] mb-0">
                Companies where I worked for years
              </p>
            </div>
          </div>
        </div>
        <div className="md:max-w-[700px] md-2x:max-w-full md:mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="py-5 px-[30px] md-2x:px-[70px] bg-[#282828] hover:border hover:border-solid hover:border-[#494949] transition-all rounded-lg mb-8 relative border-solid border-transparent border"
            >
              <ul className="flex flex-wrap list-none justify-between items-center pl-0 m-0">
                <li className="basis-1/2 md:basis-1/5 text-base md-2x:text-[30px] font-bold smxl:text-3xl leading-9 text-white flex items-center">
                  {experience.yearFrom} - {experience.yearTo}
                </li>
                <li className="basis-[15%]">
                  <img
                    src={urlFor(experience.logo)}
                    width={82}
                    height={82}
                    className="max-w-full"
                  />
                </li>
                <li className="basis-1/2 mt-5 md:text-base md-2x:text-2xl smxl:text-2xl font-bold leading-7 text-white md:basis-[30%]">
                  {experience.position}
                  <span className="text-sm mt-[5px] md-2x:text-[15px] md-2x:mt-[10px] block font-normal leading-[18px] text-[#dd584f]">
                    {experience.name}, {experience.location}.
                  </span>
                </li>
                <li className="basis-1/2 text-right md:basis-[18%]">
                  {experience.website && (
                    <a
                      href={`${experience.website}`}
                      target={`_blank`}
                      className="text-sm pl-[15px] md-2x:text-base md-2x:pl-[30px] text-white font-bold leading-[19px] relative inline-block website group"
                    >
                      <div className="flex items-center justify-end">
                        <BsArrowRight className="inline-block text-xl group-hover:text-[#ffe600] transition-all duration-300" />
                        <span className="ml-[5px] group-hover:text-[#ffe600] group-hover:ml-[1px] transition-all duration-300 md:w-[100px] md-2x:w-[110px]">
                          Go to website
                        </span>
                      </div>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -z-[1] translate-center">
        <svg width={1500} height={1500} fill="none">
          <g opacity={0.45} filter="url(#mes)">
            <circle cx={750} cy={750} r={200} fill="#e34e44" />
          </g>
          <defs>
            <filter
              id="mes"
              x={0}
              y={0}
              width={1500}
              height={1500}
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
                stdDeviation={275}
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default WorkExperience;
