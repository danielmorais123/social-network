export default function SuggestedUser() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/image-11-1610745655.png?crop=1.00xw:0.835xh;0,0.0794xh&resize=980:*"
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col ml-2">
          <p className=" text-sm">Wanda Maximoff</p>
          <p className="text-zinc-400 text-xs">Followed by Vision</p>
        </div>
      </div>
      <button className="text-xs bg-[#79AC78] text-white px-3 rounded-md py-1.5 hover:bg-white hover:text-[#79AC78] border transition border-[#79AC78]">
        Follow
      </button>
    </div>
  );
}
