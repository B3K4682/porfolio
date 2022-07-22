import Head from "next/head";
import React from "react";
import {
  Advantages,
  Banner,
  ContactForm,
  Footer,
  Header,
  WorkExperience,
  Works,
} from "../components";
import { client } from "../utils/client";
import { useStore } from "../utils/store";
import toast, { Toaster } from "react-hot-toast";

export default function Home({
  bannerTexts,
  advantage,
  experiences,
  portfolio,
  contact,
}) {
  const contactUser = () => {
    toast.success("This was testing for contact form", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Toaster />
      <Header resumeLink={bannerTexts[0].resumeLink} />
      <Banner bannerTexts={bannerTexts} />
      <Advantages advantage={advantage} />
      <WorkExperience experiences={experiences} />
      <Works portfolio={portfolio} />
      <ContactForm contacts={contact} contactUser={contactUser} />
      <Footer contact={contact[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "bannerTexts"]';
  const bannerTexts = await client.fetch(query);

  const advantagesQuery = `*[_type == "advantages"]`;
  const advantages = await client.fetch(advantagesQuery);
  const advantage = advantages[0];

  const worksExperiencesQuery = `*[_type == "workExperience"]`;
  const experiences = await client.fetch(worksExperiencesQuery);

  const portfolioQuery = `*[_type == "portfolio"]`;
  const portfolio = await client.fetch(portfolioQuery);

  const contactQuery = `*[_type == "contact"]`;
  const contact = await client.fetch(contactQuery);

  return {
    props: { bannerTexts, advantage, experiences, portfolio, contact },
  };
};
