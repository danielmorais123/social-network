"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faComments, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function MenuTabsBar() {
  const [selectedTab, setSelectedTab] = useState(1);
  const tabs = [
    {
      id: 1,
      icon: faHouse,
      className: "",
    },
    {
      id: 2,
      icon: faComments,
      className: "",
    },
    {
      id: 3,
      icon: faUsers,
      className: "",
    },
    {
      id: 4,
      icon: faEnvelope,
      className: "",
    },
    {
      id: 5,
      icon: faUser,
      className: "w-4 h-4",
    },
  ];
  return (
    <div className="bg-white flex flex-col min-w-[70px] items-center rounded-l-2xl text-zinc-500  border-r-2 border-zinc-100 ">
      <div className="mt-7 h-full flex flex-col justify-between w-full">
        <div className=" w-full flex flex-col items-center">
          <FontAwesomeIcon icon={faBars} className="w-5 h-5 cursor-pointer" />
          <div className="mt-20 flex flex-col items-center gap-7 w-full">
            {tabs.map((tab) => (
              <div
                className={twMerge(
                  "w-full flex justify-center",
                  selectedTab === tab.id ? "border-l-2 border-[#79AC78]" : ""
                )}
              >
                <FontAwesomeIcon
                  icon={tab.icon}
                  onClick={() => setSelectedTab(tab.id)}
                  className={twMerge(
                    "w-5 h-5 cursor-pointer",
                    tab?.className ? tab.className : "",
                    selectedTab === tab.id ? "text-[#79AC78]" : ""
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-7 flex flex-col gap-7 items-center">
          <FontAwesomeIcon icon={faGear} className="w-5 h-5 cursor-pointer" />
          <FontAwesomeIcon
            icon={faSignOut}
            className="w-4 h-4 cursor-pointer text-red-500"
          />
        </div>
      </div>
    </div>
  );
}
