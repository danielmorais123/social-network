"use client";

import { motion } from "framer-motion";
import {
  faArrowLeft,
  faArrowRight,
  faFireFlameCurved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrendingPost from "./posts/TrendingPost";
import { useState } from "react";

export default function Trending() {
  const test = [1, 2, 3, 4, 5, 6, 7];
  const [slice, setSlice] = useState(test.slice(0, 5));

  function setSliceTwo() {
    setSlice([]);
    setTimeout(() => {
      setSlice(test.slice(0, 5));
    }, 50);
  }
  function setTheSlice() {
    setSlice([]);
    const time = setTimeout(() => {
      setSlice(test.slice(0, 2));
    }, 50);
  }
  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faFireFlameCurved}
            className="w-4 h-4 text-orange-500"
          />
          <p className="font-bold tracking-wider">Trending</p>
        </div>
        <button className="text-zinc-400 text-sm mr-1">Show All</button>
      </div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="mt-4 flex items-center gap-3 max-w-[1500px] overflow-x-auto scrollbar-none "
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={setSliceTwo}
          className="w-4 h-4 cursor-pointer "
        />

        {slice.map((sl, idx) => (
          <TrendingPost key={idx} text={idx} />
        ))}

        <FontAwesomeIcon
          onClick={setTheSlice}
          icon={faArrowRight}
          className="w-4 h-4 cursor-pointer"
        />
      </motion.div>
    </div>
  );
}
