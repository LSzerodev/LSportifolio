'use client'

import Head from "next/head";
import Hero from "../components/sections/Hero/Hero";
import Sobre from "../components/sections/Sobre/Sobre";
import Contato from "../components/sections/Contato/Contato";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifolio</title>
      </Head>

      <Hero/>
      <Sobre />
      <Contato/>
    </>
  );
}
