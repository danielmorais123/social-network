import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import Search from "./input/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  return (
    <div className="bg-white w-full rounded-tr-2xl px-10 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="data:image/png;base64,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"
          className="h-[80px] object-contain"
          alt=""
        />
        <Search />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="w-5 h-5 cursor-pointer text-zinc-500 "
          />
          <p className="absolute bg-red-500 text-xs top-[-8px] right-[-7px] rounded-full px-1 text-white">
            5
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://www.redwolf.in/image/cache/catalog/artwork-Images/sweatshirts/iron-man-invincible-jacket-pocket-india-artwork-438x438.jpg"
            alt=""
            className="rounded-full w-10 object-contain"
          />
          <div className="flex flex-col">
            <p className="font-bold">Tony Stark</p>
            <p className="text-xs">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
