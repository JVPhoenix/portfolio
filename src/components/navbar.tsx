import { twMerge } from "tailwind-merge";
import { EmailIcon, GitHubIcon, LinkedinIcon, MenuIcon, ReactIcon } from "./icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/theme";
import { PageSelected } from "@/types";

interface PropsNavbarInterface {
  page?: number;
}

export default function Navbar(props: PropsNavbarInterface) {
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    function handleReSize() {
      if (window.innerWidth >= 1024) {
        setOpenMenu(false);
      }
    }
    window.addEventListener("resize", handleReSize);
    handleReSize();
    return () => window.removeEventListener("resize", handleReSize);
  }, []);

  return (
    <div
      className={twMerge(
        "flex bg-black2 lg:justify-center px-5 w-full h-14",
        "text-lightblue items-center font-bold text-lg shadow-lg",
        theme && "bg-transparent text-black"
      )}
    >
      <div className="flex lg:hidden select-none" onClick={() => setOpenMenu((prevState) => !prevState)}>
        <MenuIcon
          width={30}
          height={30}
          classname={twMerge(
            "fill-black2 rounded-full bg-lightblue",
            "cursor-pointer items-center ease-in-out duration-500 hover:scale-[120%] hover:brightness-150",
            theme && "fill-white bg-black"
          )}
        />
      </div>
      <div
        className={twMerge(
          "w-full justify-between hidden lg:flex",
          !openMenu ? "animate-showdown" : "animate-[fadein_0.5s_linear]",
          openMenu && "flex flex-col absolute w-fit translate-y-28 -translate-x-2 rounded-xl bg-black2 p-2 gap-1",
          openMenu && theme && "bg-transparent shadow-lg"
        )}
      >
        <Link
          href="/"
          className={twMerge(
            "flex gap-1 whitespace-nowrap select-none cursor-default",
            props.page !== PageSelected.MainPage &&
              "cursor-pointer items-center ease-in-out duration-500 hover:scale-[110%] hover:brightness-150"
          )}
        >
          <ReactIcon
            classname={twMerge("fill-lightblue transition-all ease-in-out duration-500", theme && "fill-black")}
            width={30}
            height={30}
            stroke={theme ? "white" : "black"}
          />
          <h1>{props.page === PageSelected.MainPage ? "Welcome!" : "Home Page"}</h1>
        </Link>
        <div className="flex flex-col gap-1 lg:flex-row lg:gap-4">
          <div
            className={twMerge(
              "flex gap-1 whitespace-nowrap select-none cursor-pointer items-center",
              "ease-in-out duration-500 hover:scale-[110%] hover:brightness-150"
            )}
            onClick={() => window.open("https://www.linkedin.com/in/jvbo/", "_blank", "noopener, noreferrer")}
          >
            <LinkedinIcon
              classname={twMerge("fill-lightblue ease-in-out duration-500", theme && "fill-black")}
              width={31}
              height={31}
            />
            <h1>Linked-In</h1>
          </div>
          <div
            className={twMerge(
              "flex gap-1 whitespace-nowrap select-none cursor-pointer items-center",
              "ease-in-out duration-500 hover:scale-[110%] hover:brightness-150"
            )}
            onClick={() => window.open("https://github.com/JVPhoenix", "_blank", "noopener, noreferrer")}
          >
            <GitHubIcon
              classname={twMerge("fill-lightblue ease-in-out duration-500", theme && "fill-black")}
              width={30}
              height={30}
            />
            <h1>GitHub</h1>
          </div>
          {props.page === PageSelected.MainPage && (
            <Link
              href="contacts"
              className={twMerge(
                "flex gap-1 whitespace-nowrap select-none cursor-pointer items-center",
                "ease-in-out duration-500 hover:scale-[110%] hover:brightness-150"
              )}
            >
              <EmailIcon
                classname={twMerge("fill-lightblue ease-in-out duration-500", theme && "fill-black")}
                width={31}
                height={31}
                stroke={theme ? "white" : "black"}
              />
              <h1>Contacts</h1>
            </Link>
          )}
        </div>
        <div className="flex gap-1 select-none items-center">
          <h1>Light</h1>
          <input
            className={twMerge(
              "mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300",
              "before:pointer-events-none before:absolute before:h-3.5 before:w-3.5",
              "before:rounded-full before:bg-transparent before:content-['']",
              "after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full",
              "after:border-none after:bg-neutral-100",
              "after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)]",
              "after:transition-[background-color_0.2s,transform_0.2s] after:content-['']",
              "checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px]",
              "checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full",
              "checked:after:border-none checked:after:bg-primary",
              "checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)]",
              "checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-['']",
              "hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100",
              "focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)]",
              "focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1]",
              "focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-['']",
              "checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem]",
              "checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]",
              "checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600",
              "dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary",
              "dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)]",
              "dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            )}
            type="checkbox"
            defaultChecked={!theme}
            onChange={() => setTheme((prevmode) => !prevmode)}
          />
          <h1>Dark</h1>
        </div>
      </div>
    </div>
  );
}
