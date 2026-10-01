import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>Anna Lang | Telugu Programming Language (AnnaLang)</title>
        <meta property="og:title" content="Anna Lang | Telugu Programming Language (AnnaLang)" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://sdfaheemuddin.github.io/anna-lang/" key="url" />
        <meta property="og:description" content="Anna Lang (AnnaLang) is a Telugu-style programming language written in TypeScript, with an online playground and Telugu-inspired syntax." key="description" />
        <meta name="description" content="Anna Lang (AnnaLang) is a Telugu-style programming language written in TypeScript. Try the Anna Lang playground and learn Telugu-inspired syntax such as anna idi, anna cheppu and okavela anna." />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="Anna Lang, AnnaLang, anna-lang, Telugu programming language, Telugu coding language, TypeScript interpreter, toy programming language" />
        <link rel="canonical" href="https://sdfaheemuddin.github.io/anna-lang/" />
        <meta property="og:site_name" content="Anna Lang" key="siteName" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: "Anna Lang",
              alternateName: ["AnnaLang", "anna-lang"],
              description: "Anna Lang is a Telugu-style programming language written in TypeScript with an online playground and Telugu-inspired syntax.",
              url: "https://sdfaheemuddin.github.io/anna-lang/",
              codeRepository: "https://github.com/sdfaheemuddin/anna-lang",
              programmingLanguage: "TypeScript",
              license: "https://opensource.org/licenses/MIT",
              keywords: ["Anna Lang", "AnnaLang", "Telugu programming language", "Telugu coding language", "TypeScript interpreter"]
            })
          }}
        />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

