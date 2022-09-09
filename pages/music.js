import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import About from "../components/About";
import Communities from "../components/Communities";
import Details from "../components/Details";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Instructor from "../components/Instructor";
import LiveFeed from "../components/LiveFeed";
import NavBar from "../components/NavBar";
import Testimonials from "../components/Testimonials";

export default function Music({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={data.logo} />
      </Head>
      <main className="bg-primary dark:bg-DarkPrimary font-['Poppins'] duration-700">
        <div className="2xl:h-[70vh] pt-5">
          <NavBar data={data} />
          <HeroSection data={data} />
        </div>
        <About data={data} />
        <Details data={data} />
        <Instructor data={data} />
        <Communities data={data} />
        <LiveFeed data={data} />
        <Testimonials data={data} />
        <FAQs data={data} />
        <Footer data={data} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://aman-landing.vercel.app/api/musicData`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
