import React from "react";
import PopularGroup from "./PopularGroup";

export default function PopularGroups() {
  return (
    <div className="bg-white my-5 p-3 rounded-lg">
      <p className="font-bold tracking-wide">Popular Groups</p>
      <p className="text-zinc-500 text-xs mt-1">Recommended for you</p>
      <div className="flex flex-col gap-3 mt-3">
        <PopularGroup />
        <PopularGroup />
        <PopularGroup />
      </div>
    </div>
  );
}
