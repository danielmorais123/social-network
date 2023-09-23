import Storie from "./Storie";

export default function Stories() {
  const stories = [
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
  ];
  return (
    <div className="bg-white h-fit w-full my-5 rounded-xl flex items-center ">
      <div className=" flex items-center scrollbar-thin scrollbar-track-white scrollbar-thumb-zinc-200 3xl:max-w-[1300px] 2xl:max-w-[1000px] xl:max-w-[850px] lg:max-w-[550px] w-full overflow-x-auto  ">
        {stories.map((story, idx) => (
          <Storie key={idx} story={story} />
        ))}
      </div>
    </div>
  );
}
