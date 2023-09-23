export default function PopularGroup() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://yt3.googleusercontent.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s900-c-k-c0x00ffffff-no-rj"
          alt=""
          className="h-10 w-10 rounded-lg"
        />

        <p className="font-bold text-md ml-2 tracking-wide">Marvel</p>
      </div>
      <button className="text-xs bg-[#57a04d] text-white px-3 rounded-2xl py-1.5">
        Join
      </button>
    </div>
  );
}
