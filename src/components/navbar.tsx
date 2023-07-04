import { twMerge } from "tailwind-merge";
import { EmailIcon, GitHubIcon, LinkedinIcon, ReactIcon } from "./icons";
import { Dispatch, SetStateAction } from "react";

interface PropsNavbarInterface {
  className?: string;
  switchMode: boolean;
  setSwitchMode: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar(props: PropsNavbarInterface) {
  return (
    <div
      className={twMerge(
        "flex bg-black2 justify-center px-5 w-full h-14",
        "text-lightblue items-center font-bold text-lg shadow-lg",
        props.switchMode && "bg-transparent text-black"
      )}
    >
      <div className={twMerge("flex w-full justify-between", props.className)}>
        <div className="flex gap-1 select-none items-center">
          <ReactIcon
            classname={twMerge(
              "fill-lightblue transition-all ease-in-out duration-500",
              props.switchMode && "fill-black"
            )}
            width={30}
            height={30}
            stroke={props.switchMode ? "white" : "black"}
          />
          <h1>Welcome!</h1>
        </div>
        <div className="flex gap-4">
          <div
            className={twMerge(
              "flex gap-1 whitespace-nowrap select-none cursor-pointer items-center",
              "ease-in-out duration-500 hover:scale-110 hover:brightness-150"
            )}
            onClick={() => window.open("https://www.linkedin.com/in/jvbo/", "_blank", "noopener, noreferrer")}
          >
            <LinkedinIcon
              classname={twMerge("fill-lightblue ease-in-out duration-500", props.switchMode && "fill-black")}
              width={31}
              height={31}
            />
            <h1>Linked-In</h1>
          </div>
          <div
            className={twMerge(
              "flex gap-1 whitespace-nowrap select-none cursor-pointer items-center",
              "ease-in-out duration-500 hover:scale-110 hover:brightness-150"
            )}
            onClick={() => window.open("https://github.com/JVPhoenix", "_blank", "noopener, noreferrer")}
          >
            <GitHubIcon
              classname={twMerge("fill-lightblue ease-in-out duration-500", props.switchMode && "fill-black")}
              width={30}
              height={30}
            />
            <h1>GitHub</h1>
          </div>
          <div
            className={twMerge(
              "flex gap-1 whitespace-nowrap select-none cursor-pointer items-center",
              "ease-in-out duration-500 hover:scale-110 hover:brightness-150"
            )}
          >
            <EmailIcon
              classname={twMerge("fill-lightblue ease-in-out duration-500", props.switchMode && "fill-black")}
              width={31}
              height={31}
              stroke={props.switchMode ? "white" : "black"}
            />
            <h1>Contacts</h1>
          </div>
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
            defaultChecked={true}
            onChange={() => props.setSwitchMode((prevmode) => !prevmode)}
          />
          <h1>Dark</h1>
        </div>
      </div>
    </div>
  );
}
