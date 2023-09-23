import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NormalPost from "./posts/NormalPost";

export default function Posts() {
  return (
    <div className="flex flex-col relative mt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faImage} className="w-4 h-4 text-[#79AC78]" />
          <p className="font-bold tracking-wider">Posts</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 flex-wrap  justify-between">
        <NormalPost />
        <NormalPost />
        <NormalPost />
        <NormalPost />
        <NormalPost />
      </div>
    </div>
  );
}
