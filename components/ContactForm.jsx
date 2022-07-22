import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { useStore } from "../utils/store";

const ContactForm = ({ contactUser, contacts }) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const {
    name,
    email,
    phone,
    message,
    setName,
    setEmail,
    setPhone,
    setMessage,
  } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{3})(?: *x(\d+))?\s*$/g;
    if (
      !emailRegex.test(email) ||
      email === "" ||
      (!phoneRegex.test(phone) && phone != "") ||
      message.length < 10 ||
      message === "" ||
      name === ""
    ) {
      if (name === "") {
        setIsNameValid(false);
      } else setIsNameValid(true);
      if (!emailRegex.test(email) || email === "") {
        setIsEmailValid(false);
      } else setIsEmailValid(true);
      if (!phoneRegex.test(phone) && phone != "") {
        setIsPhoneValid(false);
      } else setIsPhoneValid(true);
      if (message === "") {
        setIsMessageValid(false);
      } else setIsMessageValid(true);
      return;
    }

    if (isEmailValid && isPhoneValid && isMessageValid && isNameValid) {
      contactUser();
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setIsEmailValid(true);
      setIsNameValid(true);
      setIsPhoneValid(true);
      setIsMessageValid(true);
    }
  };

  const contact = contacts[0];

  return (
    <div
      className="relative py-[120px] overflow-hidden bg-[#191919] z-[1]"
      id="contact"
    >
      <div className="container mx-auto xl-2x:max-w-[1320px]">
        <div className="flex justify-center flex-wrap">
          <div className="flex-auto-0 w-full max-w-full px-[11.25px]">
            <div className="mb-[60px] md:mb-10 text-center">
              <h2 className="capitalize text-[32px] leading-[40px] md:text-[35px] smxl:text-[48px] md:leading-[55px] font-bold text-white inline-block pb-5 relative mt-[10px] mx-0 mb-0">
                Let's Talk.
              </h2>
              <p className="text-[18px] text-[#d8d8d8] mb-0">
                Ask me any questions or send me a service proposal. I will be
                happy to answer you at any time.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[560px] md:max-w-[720px] md-2x:!max-w-full flex flex-wrap md-2x:ml-[8.33333333%]">
          <div className="flex-auto-0 w-full md-2x:w-1/2 px-[11.25px]">
            <div className="px-6 pt-[60px] pb-[30px] md-2x:px-[65px] mb-[60px] contact-shadow rounded-[5px] bg-[#222121] border border-solid border-[#464646]">
              <h2 className="text-[1.5625rem] md:text-[1.875rem] font-semibold mb-4 text-center text-white">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit} className="overflow-hidden">
                <div className="flex flex-wrap mb-4">
                  <div className="flex-auto-0 w-full ">
                    <div className="mb-5">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-11 md-2x:h-[50px] bg-transparent w-full border-b border-b-[#464646] rounded-none shadow-none pl-0 text-white border-solid outline-none"
                        placeholder="Your Name **"
                      />
                      {!isNameValid && (
                        <div className="text-red-500 text-sm mt-3">
                          The name field is wrong.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-auto-0 w-full ">
                    <div className="mb-5">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          e.target.value = e.target.value.toLowerCase();
                          setEmail(e.target.value);
                        }}
                        className="h-11 md-2x:h-[50px] bg-transparent w-full border-b border-b-[#464646] rounded-none shadow-none pl-0 text-white border-solid outline-none"
                        placeholder="Your Email **"
                      />
                      {!isEmailValid && (
                        <div className="text-red-500 text-sm mt-3">
                          The email field is wrong.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-auto-0 w-full ">
                    <div className="mb-5">
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-11 md-2x:h-[50px] bg-transparent w-full border-b border-b-[#464646] rounded-none shadow-none pl-0 text-white border-solid outline-none"
                        placeholder="Your Phone"
                      />
                      {!isPhoneValid && (
                        <div className="text-red-500 text-sm mt-3">
                          The phone field is wrong.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-auto-0 w-full ">
                    <div className="mb-5">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="h-11 md-2x:h-[50px] bg-transparent w-full border-b border-b-[#464646] rounded-none shadow-none pl-0 text-white border-solid outline-none"
                        style={{ height: "150px" }}
                        placeholder="Message... **"
                      ></textarea>
                    </div>
                    {!isMessageValid && (
                      <div className="text-red-500 text-sm mt-3">
                        The message field is wrong.
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full float-none clear-both text-center mt-[30px] mb-4 flex justify-center">
                  <button type="button" onClick={handleSubmit} className="btn">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-auto-0 w-full md-2x:w-1/2 px-[11.25px]">
            <div className="pl-0 md-2x:pl-5 max-w-[395px]">
              <div className="contact-shadow-position py-[33px] px-10 mb-[30px] bg-[#222121] border border-solid border-[#464646] rounded-[6px]">
                <h2 className="text-[24px] text-white font-semibold mt-0 mb-[15px]">
                  {contact.position}
                </h2>
                <div className="flex items-center">
                  <div className="w-[90px] h-[90px] bg-[#2e2e2e] leading-[90px] rounded-[50%] contact-shadow-position items-center mr-5 text-center flex justify-center">
                    <MdLocationOn className="text-[40px] text-[#ffe600] leading-[unset]" />
                  </div>
                  <div>
                    <span className="text-[#d8d8d8] text-[18px] font-light">
                      Office Address
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-shadow-position py-[33px] px-10 mb-[30px] bg-[#222121] border border-solid border-[#464646] rounded-[6px]">
                <h2 className="text-[24px] text-white font-semibold mt-0 mb-[15px]">
                  {contact.email}
                </h2>
                <div className="flex items-center">
                  <div className="w-[90px] h-[90px] bg-[#2e2e2e] leading-[90px] rounded-[50%] contact-shadow-position items-center mr-5 text-center flex justify-center">
                    <GoMail className="text-[40px] text-[#ffe600] leading-[unset]" />
                  </div>
                  <div>
                    <span className="text-[#d8d8d8] text-[18px] font-light">
                      Office Mail
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-shadow-position py-[33px] px-10 bg-[#222121] border border-solid border-[#464646] rounded-[6px]">
                <h2 className="text-[24px] text-white font-semibold mt-0 mb-[15px]">
                  {contact.phone}
                </h2>
                <div className="flex items-center">
                  <div className="w-[90px] h-[90px] bg-[#2e2e2e] leading-[90px] rounded-[50%] contact-shadow-position items-center mr-5 text-center flex justify-center">
                    <FiPhoneCall className="text-[40px] text-[#ffe600] leading-[unset]" />
                  </div>
                  <div>
                    <span className="text-[#d8d8d8] text-[18px] font-light">
                      Official Phone
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 -z-[1] translate-center">
        <svg width={1500} height={1500} fill="none">
          <g opacity={0.45} filter="url(#contactFormSvg)">
            <circle cx={750} cy={750} r={200} fill={`#dd584f`} />
          </g>
          <defs>
            <filter
              id="contactFormSvg"
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

export default ContactForm;
