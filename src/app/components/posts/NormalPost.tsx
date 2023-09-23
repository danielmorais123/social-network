import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fh } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faCommentDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NormalPost() {
  return (
    <div className="bg-white p-2 rounded-lg flex flex-col items-start w-full 2xl:w-[49%]">
      <div className="flex items-start">
        <img
          src="https://www.hotelscombined.pt/rimg/dimg/94/0b/176edc87-city-47598-177452c7f24.jpg?width=1366&height=768&xhint=3839&yhint=3164&crop=true"
          alt=""
          className="object-contain w-[200px] 3xl:w-[250px] rounded-lg"
        />
        <div className="flex flex-col ml-4">
          <div className="flex items-center">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/image-11-1610745655.png?crop=1.00xw:0.835xh;0,0.0794xh&resize=980:*"
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col ml-2">
              <p className="font-bold text-sm">Wanda Maximoff</p>
              <p className="text-zinc-500 text-xs">1 hour ago</p>
            </div>
          </div>
          <p className="max-h-[90px] text-sm mt-1 overflow-y-scroll scrollbar-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            consectetur sequi repellendus, quis sapiente in qui doloremque nemo
            nam ullam, perspiciatis at suscipit maiores ipsum cumque facere
            Minus amet repellat, dignissimos, labore ipsam a id similique
            suscipit sequi eveniet, quae aliquid ipsum. Doloribus, laudantium?
            Accusamus in ad et vitae cumque iure! Quis aspernatur minus dolor
            magnam ullam minima perspiciatis excepturi culpa labore rem autem
            exercitationem error perferendis inventore cupiditate ipsum,
            eveniet, expedita id reprehenderit.
          </p>
          <div className="3xl:flex flex-col hidden">
            <hr className="mt-2" />
            <div className="mt-2 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://www.redwolf.in/image/cache/catalog/artwork-Images/sweatshirts/iron-man-invincible-jacket-pocket-india-artwork-438x438.jpg"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <input
                  type="text"
                  className="outline-none text-sm pl-2 text-zinc-600 bg-zinc-200 ml-2 p-1.5 rounded-full"
                  placeholder="Add your comment"
                />
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                {true ? (
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="cursor-pointer transition hover:text-red-500"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={fh}
                    className="cursor-pointer transition text-red-500"
                  />
                )}

                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faShare}
                  className="mr-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-2 3xl:hidden w-full" />
      <div className="mt-2 3xl:hidden flex items-center justify-between w-full">
        <div className="flex items-center">
          <img
            src="https://www.redwolf.in/image/cache/catalog/artwork-Images/sweatshirts/iron-man-invincible-jacket-pocket-india-artwork-438x438.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <input
            type="text"
            className="outline-none text-sm pl-2 text-zinc-600 bg-zinc-200 ml-2 p-1.5 rounded-full"
            placeholder="Add your comment"
          />
        </div>
        <div className="flex items-center gap-2 text-zinc-600">
          <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
          <FontAwesomeIcon icon={faCommentDots} className="cursor-pointer" />
          <FontAwesomeIcon
            icon={faShare}
            className="mr-2"
            className="cursor-pointer"
          />
        </div>
      </div>{" "}
    </div>
  );
}
