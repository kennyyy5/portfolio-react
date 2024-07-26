"use client";

import { useRef, useState } from "react";
//import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover.tsx";

export function DirectionAwareHoverDemo({src}) {
  const imageUrl =src;
  return (
    <div className="h-[20rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}
