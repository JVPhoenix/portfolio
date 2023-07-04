import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import About from "@/components/about";
import Experience from "@/components/experience";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [switchMode, setSwitchMode] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>JV Portfolio</title>
        <meta property="og:title" content="JV Portfolio" key="title" />
      </Head>
      <main
        className={twMerge(
          "transition-all ease-in-out duration-500 bg-black1 min-h-screen pb-4",
          switchMode && "bg-white1",
          inter.className
        )}
      >
        <Navbar switchMode={switchMode} setSwitchMode={setSwitchMode} className="animate-showdown" />
        <div
          className={twMerge(
            "flex flex-col m-auto max-w-[825px] text-white1 items-center align-middle gap-10 mt-5",
            "animate-fadein",
            switchMode && "text-black"
          )}
        >
          <About />
          <Experience switchMode={switchMode} />
        </div>
      </main>
    </>
  );
}
