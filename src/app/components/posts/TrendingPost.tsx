"use client";

import { motion } from "framer-motion";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TrendingPost() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="bg-white min-w-[230px] p-2 rounded-lg"
    >
      <img
        src="https://www.digitaltrends.com/wp-content/uploads/2023/09/MSM2_Preview_SymbioteCombat_4k_Legal_2023.jpg?p=1"
        alt=""
        className="w-[230px] object-contain rounded-lg"
      />
      <p className="text-sm break-words mt-1 ">
        Marvel's Spider Man 2 Simbiote
      </p>
      <div className="mt-2 text-zinc-400 flex items-center justify-between">
        <div className="flex items-center ">
          <FontAwesomeIcon icon={faHeart} className="w-4 h-4 cursor-pointer" />
          <p className="text-xs ml-1">700k </p>
        </div>
        <div className="flex items-center ">
          <FontAwesomeIcon
            icon={faComment}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <img
          src="https://agentecarterbr.files.wordpress.com/2014/05/peggy-carter-sidebar.jpg"
          className="rounded-full w-8"
          alt=""
        />
        <div className="ml-2 ">
          <p className="font-bold text-sm">Peggy Carter</p>
          <p className="text-xs text-zinc-500">22 hours ago</p>
        </div>
      </div>
    </motion.div>
  );
}
