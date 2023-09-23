"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  faClose,
  faDotCircle,
  faSearch,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

export default function Friends() {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [showFriends, setShowFriends] = useState<boolean>(false);
  const friends = [
    {
      name: "Tony Stark",
      image:
        "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
    },
    {
      image:
        "https://i.pinimg.com/736x/ba/32/c3/ba32c3707b4625af137ee5892c10a36f.jpg",
      name: "Steve Rogers",
    },
    {
      name: "Peggy Carter",
      image:
        "https://agentecarterbr.files.wordpress.com/2014/05/peggy-carter-sidebar.jpg",
    },
    {
      name: "Peter Parker",
      image:
        "https://laverdadnoticias.com/__export/1639538585445/sites/laverdad/img/2021/12/14/tom_holland_peter_parker_villano_pelicula.jpg_1199923512.jpg",
    },
    {
      name: "Peggy Carter",
      image:
        "https://agentecarterbr.files.wordpress.com/2014/05/peggy-carter-sidebar.jpg",
    },
    {
      name: "Peter Parker",
      image:
        "https://laverdadnoticias.com/__export/1639538585445/sites/laverdad/img/2021/12/14/tom_holland_peter_parker_villano_pelicula.jpg_1199923512.jpg",
    },

    {
      name: "Peggy Carter",
      image:
        "https://agentecarterbr.files.wordpress.com/2014/05/peggy-carter-sidebar.jpg",
    },
    {
      name: "Peter Parker",
      image:
        "https://laverdadnoticias.com/__export/1639538585445/sites/laverdad/img/2021/12/14/tom_holland_peter_parker_villano_pelicula.jpg_1199923512.jpg",
    },
  ];

  const friendsFiltered =
    inputSearch === ""
      ? friends
      : friends.filter((f) => f.name.toLowerCase().includes(inputSearch));
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
      className={twMerge(
        "my-5 bg-white rounded-b-lg  flex  justify-end flex-col cursor-pointer relative",
        showFriends ? "rounded-t-lg h-fit" : "h-fit"
      )}
    >
      {showFriends ? (
        <FontAwesomeIcon
          icon={faClose}
          className="h-3 w-3 rounded-full p-1 absolute top-[-10px] left-[-5px] z-10 bg-red-500 text-white"
          onClick={() => setShowFriends(false)}
        />
      ) : (
        <></>
      )}
      {showFriends ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className=""
        >
          <div className="flex justify-end pt-1.5 pr-4 w-full relative">
            {/* <FontAwesomeIcon
              icon={faClose}
              className="h-4 w-4 text-red-700"
              onClick={() => setShowFriends(false)}
            /> */}
          </div>
          <div className="px-2  pt-1 pb-3 w-full relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-3 left-5 text-sm"
            />
            {inputSearch ? (
              <FontAwesomeIcon
                icon={faClose}
                className="h-4 w-4 text-red-700 absolute top-3 right-5"
                onClick={() => setInputSearch("")}
              />
            ) : (
              <></>
            )}

            <input
              type="text"
              className="outline-none text-sm bg-zinc-100 w-full p-1.5 rounded-lg pl-10"
              placeholder="Search user..."
              onChange={(e) => setInputSearch(e.target.value)}
              value={inputSearch}
            />
          </div>

          <div className="flex flex-col gap-2 p-1 max-h-[30vh] scrollbar-thin scrollbar-track-white scrollbar-thumb-[#79AC78]  overflow-y-auto">
            {friendsFiltered.map((friend, idx) => (
              <div
                key={idx}
                className="flex items-center px-3 py-1 gap-3 hover:bg-zinc-100  transition cursor-pointer"
              >
                <img
                  src={friend.image}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-sm">{friend.name}</p>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon
                      icon={faDotCircle}
                      className="w-2 h-2 text-[#79AC78]"
                    />
                    <p className="text-zinc-400 text-xs">Online</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <></>
      )}

      <div
        onClick={() => setShowFriends(!showFriends)}
        className="flex items-center justify-center space-x-1 w-full py-2"
      >
        <FontAwesomeIcon
          icon={faUserFriends}
          className="text-zinc-500 h-4 w-4"
        />

        <p className="text-sm">My Friends</p>
      </div>
    </motion.div>
  );
}
