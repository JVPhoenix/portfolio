import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { twMerge } from "tailwind-merge";
import About from "@/components/about";
import Experience from "@/components/experience";
import Head from "next/head";
import { useTheme } from "@/context/theme";
import { PageSelected } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {theme} = useTheme();
  return (
    <>
      <Head>
        <title>JV Portfolio</title>
        <meta property="og:title" content="JV Portfolio" key="title" />
      </Head>
      <main
        className={twMerge(
          "transition-all ease-in-out duration-500 bg-black1 min-h-screen pb-4",
          theme && "bg-white1",
          inter.className
        )}
      >
        <Navbar page={PageSelected.MainPage} />
        <div
          className={twMerge(
            "flex flex-col m-auto max-w-[825px] text-white1 items-center align-middle gap-10 mt-5",
            "animate-fadein",
            theme && "text-black"
          )}
        >
          <About />
          <Experience />
        </div>
      </main>
    </>
  );
}
