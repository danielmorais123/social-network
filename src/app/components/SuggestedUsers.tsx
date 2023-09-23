import SuggestedUser from "./SuggestedUser";

export default function SuggestedUsers() {
  return (
    <div className="bg-white my-5 p-3 rounded-lg">
      <p className="font-bold tracking-wide">Suggested For You</p>
      <p className="text-zinc-500 text-xs mt-1">Recommended for you</p>
      <div className="flex flex-col gap-4 mt-3">
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
      </div>
    </div>
  );
}
