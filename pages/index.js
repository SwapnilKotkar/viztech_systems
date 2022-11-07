import Hero from "../components/Hero";
import Head from "next/head";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";


export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;1,100;1,200&display=swap" rel="stylesheet"/>
    </Head>
    <Hero/>
    <SectionOne/>
    <SectionTwo/>
    </>
  )
}
