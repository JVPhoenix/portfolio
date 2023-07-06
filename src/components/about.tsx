import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-2 w-full min-h-[350px] items-center ">
      <h1 className="text-4xl font-bold text-center">About-me</h1>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex gap-2 max-h-[300px]">
          <Image
            className="rounded-md"
            alt="Page owner pic"
            src="https://i.imgur.com/bmIIQLW.jpg"
            width={200}
            height={0}
          />
          <Image
            className="rounded-md"
            alt="Page owner pic"
            src="https://i.imgur.com/suMfNgu.jpg"
            width={200}
            height={0}
          />
        </div>
        <div className="flex flex-col gap-3 w-[430px] text-justify indent-8">
          <p>Hello! I'm João Vitor, or JV, and i'm a lover of technologies, innovations and programming.</p>
          <p>
            I started in the area with the assembly and maintenance of computers and later with graphic design, always
            focusing on punctuality, communication, and customer experience and satisfaction.
          </p>
          <p>
            I'm have a Chemistry Degree and work with that, but now, i want to get into the programming area, as a
            Front-end Developer.
          </p>
        </div>
      </div>
    </div>
  );
}
