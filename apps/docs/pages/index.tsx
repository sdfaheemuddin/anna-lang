import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>Anna Lang - Telugu-style Toy Programming Language</title>
        <meta property="og:title" content="Anna Lang - Telugu-style Toy Programming Language" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://sdfaheemuddin.github.io/anna-lang/" key="url" />
        <meta property="og:description" content="Anna Lang is a Telugu-style toy programming language written in TypeScript, based on the original Bhai Lang project." key="description" />
        <meta name="description" content="Anna Lang is a Telugu-style toy programming language written in TypeScript. Try the online playground and learn syntax such as anna idi, anna cheppu and okavela anna." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://sdfaheemuddin.github.io/anna-lang/" />
        <meta property="og:site_name" content="Anna Lang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

