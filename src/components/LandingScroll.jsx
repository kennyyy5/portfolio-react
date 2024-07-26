"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
//import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden view">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Kenny Adenuga <br />
              <span className="  font-bold mt-1 leading-none">
              Current SEng fellow at Headstarter AI
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`img-of-me.png`}
          alt="img-of-kenny-kehinde-adenuga"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
