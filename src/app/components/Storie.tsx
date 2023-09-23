export default function Storie({ story }: any) {
  return (
    <div className="flex flex-col justify-center items-center min-w-[110px] p-1">
      <img
        src={story?.image}
        alt=""
        className="rounded-full !w-[100px] h-[100px] object-contain p-2"
      />
      <p className="text-xs">{story?.name}</p>
    </div>
  );
}
