import { twMerge } from "tailwind-merge";
import {
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  JsIcon,
  NextJSIcon,
  PhotoshopIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TsIcon,
  VegasIcon,
} from "./icons";
import Image from "next/image";
import { useTheme } from "@/context/theme";

export default function Experience() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col w-[380px] lg:w-full gap-2 items-center justify-center">
      <h1 className="text-3xl lg:text-4xl font-bold">Professional Experience</h1>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-xl">DEVELOPER</h1>
        <p>Below you can see a preview of all the projects i made, and you can click to see the live result!</p>
        <div
          className={twMerge(
            "flex flex-col lg:flex-row gap-2 items-center justify-center rounded-2xl bg-slate-700 p-2",
            "ease-in-out duration-500",
            "w-[380px] h-full lg:h-[240px] lg:w-full",
            theme && "bg-slate-200"
          )}
        >
          <Image
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnhzN3JvcDNuY2doMjNqczllMHl4YzBxOWNwMXI3eGdlcjYya3k4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x39Aba7wrHh3IqRvZZ/giphy.gif"
            alt="First project gif"
            width={400}
            height={0}
            className={twMerge(
              "cursor-pointer rounded-xl hover:border-4 hover:scale-105 hover:border-slate-700",
              "ease-in-out duration-500 w-[380px] lg:w-[400px]",
              theme && "hover:border-slate-200"
            )}
          />
          <Image
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWRjbDJqN3Jicm84d3B2bGc1OGVpdDdzdTQ5NHdsMG9hYWNiZnk5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/egksMkWhwkHzXEiFJm/giphy.gif"
            alt="Second project gif"
            width={400}
            height={0}
            className={twMerge(
              "cursor-pointer rounded-xl hover:border-4 hover:scale-105 hover:border-slate-700",
              "ease-in-out duration-500 w-[380px] lg:w-[400px]",
              theme && "hover:border-slate-200"
            )}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p>Also, the codes are available in my GitHub, with all the commits.</p>
        <div
          className={twMerge(
            "flex flex-col gap-1 bg-slate-700 p-2 my-2 rounded-2xl text-center",
            "ease-in-out duration-500 w-[380px] lg:w-full",
            theme && "bg-slate-200"
          )}
        >
          <h1>I have knowledge in the following techs:</h1>
          <div className="flex gap-2">
            <HtmlIcon width={60} height={60} classname="" />
            <CssIcon width={60} height={60} classname="" />
            <SassIcon width={60} height={60} classname="" />
            <JsIcon width={60} height={60} classname="" />
            <ReactIcon width={60} height={60} stroke="#00d8ff" classname="fill-none" />
            <TsIcon width={60} height={60} classname="" />
            <NextJSIcon width={60} height={60} classname="" />
            <TailwindIcon width={60} height={60} classname="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">OTHER JOBS</h1>
        <h1 className="font-bold">Graphic Designer</h1>
        <div className="flex flex-col items-center text-justify">
          <p className="indent-8">
            Started as a Graphic Designer in a local print shop for a year, making new ideas and concepts using Adobe
            Photoshop. Later, worked as a freelancer designer, and editing videos in Vegas Pro, always focusing on the
            customer satisfaction.
          </p>
          <div
            className={twMerge(
              "flex flex-col gap-1 bg-slate-700 p-2 my-2 rounded-2xl text-center items-center",
              "ease-in-out duration-500 w-fit",
              theme && "bg-slate-200"
            )}
          >
            <h1>I have knowledge in the following editing softwares:</h1>
            <div className="flex gap-2 w-[370px] items-center justify-center">
              <PhotoshopIcon width={60} height={60} classname="fill-[#0c0824]" />
              <VegasIcon width={60} height={60} classname="stroke-[#1195cf]" />
              <FigmaIcon width={58} height={58} classname="fill-slate-200" />
            </div>
          </div>
        </div>
        <h1 className="font-bold">Chemistry Related</h1>
        <p className="indent-8 text-justify">
          In my College Degree, i made 4 internships as a teacher, and worked as a researcher in the laboratory of
          Biology of my campus, in some health areas, for example, water and soil analysis, and interactions and effects
          of pesticides in humans and other living beings.
        </p>
        <p className=" indent-8 text-justify">
          Also, i'm working as a Water Resources Coordinator for my city's secretary of environment, in the chemistry
          area, focused on the control and analysis of water sources.
        </p>

        <h1 className="font-bold italic my-2">See the full list of my jobs in my Linked-In.</h1>
      </div>
    </div>
  );
}
