import React, { useEffect, useState } from "react";

const Advantages = ({ advantage }) => {
  const [boxColors, setBoxColors] = useState([]);

  const colors = [
    "linear-gradient(180deg,rgba(255,230,0,.6),rgba(31,30,28,.6) 67.59%)",
    "linear-gradient(180deg,rgba(89,195,120,.6),rgba(31,30,28,.6) 67.59%)",
    "linear-gradient(180deg,rgba(221,88,79,.6),rgba(31,30,28,.6) 67.59%)",
    "linear-gradient(180deg,rgba(255,154,0,.6),rgba(31,30,28,.6) 67.59%)",
    "linear-gradient(180deg,rgba(0,169,255,.6),rgba(31,30,28,.6) 67.59%)",
    "linear-gradient(180deg,rgba(158,0,255,.6),rgba(31,30,28,.6) 67.59%)",
  ];
  useEffect(() => {
    const randomColors = colors.sort(() => Math.random() - 0.5);
    setBoxColors(randomColors);
  }, []);
  const languageBoxs = advantage.languagesBox;
  return (
    <div className="relative py-[120px] overflow-hidden bg-[#191919] z-[1]" id="about">
      <div className="container mx-auto xl-2x:max-w-[1320px]">
        <div className="flex items-center flex-wrap">
          <div className="xs:flex-grow-0 xs:flex-shrink-0 xs:basis-auto xs:w-full flex-shrink-0 w-full max-w-full px-[11.25px] mt-0 md-2x:w-[41.66666667%]">
            <div className="mb-12 relative max-w-[480px]">
              <div className="rounded-[10px] max-w-[350px] text-center advantages-sum">
                <h2 className="text-[140px] font-bold text-[#ffe600] leading-[180px]">
                  {advantage.yearsExperience}
                </h2>
                <span className="text-lg text-white">Years of Experience</span>
              </div>
              <div className="rounded-xl p-5 absolute z-[1] max-w-[300px] flex items-center bg-transparent bottom-10 right-0 advantages-before advantages-after">
                <h3 className="font-bold text-[45px] leading-7 text-[#59c378] basis-1/2 mb-0 mr-[10px]">
                  {advantage.clientSatisfaction}
                </h3>
                <p className="mb-0 basis-1/2 text-white">
                  Clients Satisfections
                </p>
              </div>
            </div>
          </div>
          <div className="xs:flex-grow-0 xs:flex-shrink-0 xs:basis-auto xs:w-full flex-shrink-0 w-full max-w-full px-[11.25px] mt-0 md-2x:w-1/2 md-2x:ml-[8.33333333%]">
            <div>
              <div className="mb-10">
                <h2 className="text-[35px] font-semibold md:text-5xl text-white mb-4">
                  My Advantage
                </h2>
                <p className="text-[#d8d8d8] text-base mt-0 mb-4">
                  {advantage.name}
                </p>
              </div>
              <div className="flex flex-wrap -mx-4 my-0">
                {languageBoxs.map((box, index) => (
                  <div
                    key={index}
                    className="basis-[26.33%] smxl:basis-[27.33%] xl-2x:basis-[28.33%] rounded-xl mb-[30px] mt-0 mx-[15px]"
                    style={{
                      background: `${boxColors[index]}`,
                    }}
                  >
                    <div className="p-5 xl-2x:p-10 bg-[#1f1e1d] mx-[3px] mt-[3px] mb-0 text-center rounded-xl">
                      <h3 className="font-bold text-[35px] text-white mb-2 mt-0">
                        {box.precentage}
                      </h3>
                      <p className="text-[#ffe600] mb-0 font-[16px] leading-[1.8rem] mt-0">
                        {box.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 -bottom-[95%] -z-[1]">
        <svg width={995} height={1495} fill="none">
          <g opacity={0.3} filter="url(#a)">
            <circle cx={247.5} cy={747.5} r={247.5} fill="#FFE500" />
          </g>
          <defs>
            <filter
              id="a"
              x={-500}
              y={0}
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
                result="effect1_foregroundBlur_39_4267"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute -right-[10%] -bottom-[90%] -z-[1]">
        <svg width={1252} height={1901} fill="none">
          <g opacity={0.15} filter="url(#b)">
            <circle cx={950} cy={950.004} r={450} fill="#ad00ff" />
          </g>
          <defs>
            <filter
              id="b"
              x={0}
              y={0.004}
              width={1900}
              height={1900}
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
                result="effect1_foregroundBlur_39_4265"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute left-0 top-[50px] -z-[1]">
        <img src="https://elito-next.netlify.app/images/about/shape1.png" />
      </div>
      <div className="absolute right-0 bottom-0 -z-[1]">
        <img src="https://elito-next.netlify.app/images/about/shape2.png" />
      </div>
    </div>
  );
};

export default Advantages;
