import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  return (
    <div className="bg-zinc-100 text-zinc-400  py-2 px-3 flex items-center gap-2 rounded-md ml-5 min-w-[400px]">
      <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
      <input
        type="text"
        className="outline-none bg-transparent text-sm"
        placeholder="Search..."
      />
    </div>
  );
}
