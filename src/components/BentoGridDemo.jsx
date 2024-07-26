import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function BentoGridSecondDemo() {
  return (
    <>
     <h1 className="display-5 fw-bold text-body-emphasis lh-1   text-center py-2 view"id="projects">
      Projects
      </h1>
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] p-0 ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: <a href="https://salita-co.netlify.app/" target="_blank">Salita.co</a>,
    description: "Created a business website for the client using React as the front-end",
    header: <img src="salita-co-screenshot.png" alt="img-of-project-kenny-kehinde-adenuga"/>,
    className: "md:col-span-2 col-span-2 my-5 proj-card view",
    //icon:
  },
  {
    title: <a href="https://react-jspassword-generator.netlify.app/" target="_blank">Password Generator</a>,
    description: "Tested my knowledge of react hooks",
    header: <img src="password-generator-screenshot.png" alt="img-of-project-kenny-kehinde-adenuga"/>,
    className: "md:col-span-1 col-span-1 my-5 proj-card view",
   // icon:,
  },
  {
    title: <a href="https://github.com/kennyyy5/blogAPI" target="_blank">Blog API</a>,
    description: "Created an API to test my CRUD skills using ExpressJS and NodeJS",
    header: <Skeleton />,
    className: "md:col-span-1 col-span-1 my-5 proj-card view",
  //  icon: ,
  },
  {
    title:<a href="https://lyric-findr-kennyyy5.onrender.com/" target="_blank">Lyric Findr</a>,
    description:
      "Called Genius API to return song name given the lyrics using NodeJS and Express JS",
    header: <img src="lyric-findr-screenshot.png" alt="img-of-project-kenny-kehinde-adenuga"/>,
    className: "md:col-span-2 col-span-2 my-5 proj-card view",
   // icon: ,
  },
];
