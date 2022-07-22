import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../utils/logo.png";
import { headerLinks } from "../utils/constants";
import { AiOutlineArrowDown, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ resumeLink }) => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      const headerHeight = header.offsetHeight;
      const scrollTop = window.pageYOffset;
      if (scrollTop > headerHeight) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    });
  }, []);

  // handle link click but it's looping through the array of links
  // and setting the active link to true
  const handleLinkClick = (link) => {
    setIsLinkActive(link);
  }
 
  
  return (
    <header
      className={`${
        headerScrolled
          ? "fixed top-0 left-0 w-full bg-[#131313] z-[999999999]"
          : "absolute top-0 left-0 w-full z-[999999999]"
      }`}
    >
      <div className={`md:container mx-auto md:p-4 p-2 header`}>
        <div className="flex items-center justify-between">
          <div className="md:hidden block">
            <button
              type="button"
              className="btn text-xl rounded-md p-2"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <GiHamburgerMenu className="text-white" />
            </button>
            <div
              className={`${
                menuOpened ? "opacity-100 left-0" : "-left-[300px] opacity-0"
              } absolute top-0 transition-all duration-200 ease-in bg-[#1e1e1e] w-[250px] z-[999999999] overflow-hidden h-[110vh] menu-shadow md:hidden block menu ${
                headerScrolled ? "position-fixed" : ""
              }`}
            >
              <div className="flex flex-col justify-center">
                <div className="m-righter w-10 h-10 text-white text-right z-[99] leading-10">
                  <div>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer"
                      onClick={() => setMenuOpened(!menuOpened)}
                    />
                  </div>
                </div>
                <div>
                  <ul className="flex flex-col justify-center">
                    {headerLinks.map((link, index) => (
                      <li key={index} className="py-3 px-[35px]">
                        <Link href={link.link}>
                          <p className="text-white cursor-pointer font-normal">
                            {link.name}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link href="/">
              <div className="w-[120px] flex items-center justify-between cursor-pointer">
                <Image src={Logo} objectFit="fill" />
                <p className="text-lg md:text-2xl text-white font-bold">
                  Beqa.
                </p>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="list-none flex items-center justify-around">
              {headerLinks.map((item, idx) => (
                <li key={idx} className="relative">
                  <Link href={item.link}>
                    <p
                      className={`text-white cursor-pointer text-lg font-semibold py-[10px] px-[15px] hover:before:content-[''] hover:before:opacity-100 hover:before:visible hover:before:absolute relative hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[4px] hover:before:bg-[#59c378] hover:before:rounded-[3px] transition-all before:duration-300 ${
                        isLinkActive === item.link && isLinkActive != "/"
                          ? "before:content-[''] before:opacity-100 before:visible before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59c378] before:rounded-[3px] "
                          : ""
                      }`}
                      onClick={() => handleLinkClick(item.link)}
                    >
                      {item.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href={resumeLink}>
              <button type="button" className="btn">
                Resume <AiOutlineArrowDown className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
