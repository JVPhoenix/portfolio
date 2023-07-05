import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { twMerge } from "tailwind-merge";
import { PageSelected } from "@/types";
import Head from "next/head";
import { useTheme } from "@/context/theme";
import { DiscordIcon, EmailIcon } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Contacts() {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>Contact-me!</title>
        <meta property="og:title" content="JV Portfolio" key="title" />
      </Head>
      <div
        className={twMerge(
          "transition-all ease-in-out duration-500 bg-black1 min-h-screen pb-4",
          theme && "bg-white1",
          inter.className
        )}
      >
        <Navbar page={PageSelected.ContactsPage} />
        <div
          className={twMerge(
            "flex flex-col text-white1 items-center align-middle gap-10 mt-5",
            "animate-fadein",
            theme && "text-black"
          )}
        >
          <h1 className="text-4xl font-bold text-center whitespace-nowrap">Contacts</h1>
          <div className="flex items-center align-middle gap-10">
            <div
              className={twMerge(
                "flex gap-1 pr-1 whitespace-nowrap select-none cursor-pointer items-center",
                "ease-in-out duration-500 hover:scale-110 hover:brightness-150",
                "rounded-xl bg-lightblue text-black1",
                theme && "bg-black text-white"
              )}
            >
              <DiscordIcon
                classname={twMerge("fill-black ease-in-out duration-500", theme && "fill-white")}
                width={40}
                height={40}
              />
              <h1
                className="font-bold text-xl"
                onClick={() =>
                  window.open("https://discordapp.com/users/337024544617267210", "_blank", "noopener, noreferrer")
                }
              >
                Discord
              </h1>
            </div>

            <div
              className={twMerge(
                "flex gap-1 pr-1 whitespace-nowrap select-none cursor-pointer items-center",
                "ease-in-out duration-500 hover:scale-110 hover:brightness-150",
                "rounded-xl bg-lightblue text-black1",
                theme && "bg-black text-white"
              )}
            >
              <EmailIcon
                classname={twMerge("fill-lightblue ease-in-out duration-500", theme && "fill-black")}
                width={40}
                height={40}
                stroke={theme ? "white" : "black"}
              />
              <h1
                className="font-bold text-xl"
                onClick={() =>
                  window.open("mailto:jvitorcocal07@gmail.com", "_blank", "noopener, noreferrer")
                }
              >
                E-mail
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
