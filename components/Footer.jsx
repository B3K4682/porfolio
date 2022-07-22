import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { footerLinks, footerServices } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-[#202020] relative z-[1]">
      <div className="pt-20 pb-[10px] md:pt-[90px] md:pb-5 md-2x:pt-[90px] md-2x:pb-[90px] z-[1] relative overflow-hidden">
        <div className="container mx-auto xl-2x:max-w-[1320px]">
          <div className="flex flex-wrap md-2x:justify-center">
            <div className="min-h-[auto] mb-[60px] md:min-h-[235px] md:mb-[70px] md-2x:min-h-[auto] md-2x:mb-0 flex-auto-0 w-full md:w-1/2 md-2x:w-[33.33333333%]">
              <div className="max-w-[90%] mb-5 md:mb-[30px] smxl:max-w-full">
                <Link href="/">
                  <div className="w-[250px] flex items-center md:justify-start justify-between cursor-pointer">
                    <img src="./logo.png" width={120} className="mr-5" />
                    <p className="text-[45px] md:text-2xl text-white font-bold">
                      Beqa.
                    </p>
                  </div>
                </Link>
              </div>
              <p className="mb-[0.8em] text-white leading-2 text-base font-normal max-w-[360px]">
                I am currently free and can take on your assignment or work for
                your company at any time.
              </p>
              <div>
                <ul className="pt-[8px] md:pt-[15px] overflow-hidden list-none m-0 pl-0">
                  <li className="text-white float-left">
                    <a
                      href="#"
                      target={`_blank`}
                      className="hover:text-[#ffe600] transition-all"
                    >
                      <FaFacebookF className="text-xl mr-5" />
                    </a>
                  </li>
                  <li className="text-white float-left ">
                    <a
                      href="#"
                      target={`_blank`}
                      className="hover:text-[#ffe600] transition-all"
                    >
                      <FaTwitter className="text-xl mr-5" />
                    </a>
                  </li>
                  <li className="text-white float-left">
                    <a
                      href="#"
                      target={`_blank`}
                      className="hover:text-[#ffe600] transition-all"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-h-[auto] mb-[60px] md:min-h-[235px] md:mb-[70px] md-2x:min-h-[auto] md-2x:mb-0 flex-auto-0 w-full md:w-1/2 md-2x:w-[16.66666667%]">
              <div>
                <div className="mb-5 md:mb-[30px]">
                  <h3 className="text-[1.4666666667rem] md:text-[1.6rem] text-bold text-white mb-0 pb-[0.4em] capitalize relative">
                    Navigation
                  </h3>
                </div>
                <ul className="pl-0 m-0">
                  {footerLinks.map((link, index) => (
                    <li
                      className="relative pl-[15px] li-before mt-[17px]"
                      key={index}
                    >
                      <Link href={`${link.link}`}>
                        <p className="cursor-pointer text-white inline-block hover:text-[#59c378] transition-all">
                          {link.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="min-h-[auto] mb-[60px] md:min-h-[235px] md:mb-[70px] md-2x:min-h-[auto] md-2x:mb-0 flex-auto-0 w-full md:w-full md:flex md:justify-center md-2x:w-[25%]">
              <div>
                <div className="mb-5 md:mb-[30px]">
                  <h3 className="text-[1.4666666667rem] md:text-[1.6rem] text-bold text-white mb-0 pb-[0.4em] capitalize relative">
                    All Services
                  </h3>
                </div>
                <ul className="pl-0 m-0">
                  {footerServices.map((service, index) => (
                    <li
                      className="relative pl-[15px] li-before mt-[17px]"
                      key={index}
                    >
                      <Link href={`${service.link}`}>
                        <p className="cursor-pointer text-white inline-block hover:text-[#59c378] transition-all">
                          {service.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="container mx-auto">
          <div className="relative py-5 flex flex-wrap">
            <div className="shrink-0 max-w-full bg-[hsla(0,0%,100%,.05)] w-[calc(100%-30px)] h-[1px] absolute left-[15px] top-0"></div>
            <p className="float-none mt-[7px] mb-5 text-white text-[.9333333333rem] text-center md:mb-0 w-full">
              Copyright © 2022 Beqa Jiqia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
