import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>Anna-lang - A toy programming language inspired by Bhailang</title>
        <meta property="og:title" content="Anna-lang - A toy programming language inspired by Bhailang" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://bhailang.js.org" key="url" />
        <meta property="og:description" content="Anna-lang - A toy programming language inspired by Bhailang." key="description" />
        <meta name="description" content="Anna-lang - A toy programming language inspired by Bhailang, written in Typescript." />
        <meta property="og:site_name" content="Anna-lang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

