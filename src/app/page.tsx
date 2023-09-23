import Friends from "./components/Friends";
import MenuTabsBar from "./components/MenuTabsBar";
import Navbar from "./components/Navbar";
import PopularGroups from "./components/PopularGroups";
import Posts from "./components/Posts";
import Stories from "./components/Stories";
import SuggestedUsers from "./components/SuggestedUsers";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col relative bg-[#d6d8db] overflow-hidden">
      <div className="w-[95%] m-auto flex-grow my-3 sm:my-6 lg:my-10 rounded-2xl flex">
        <MenuTabsBar />
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="bg-zinc-100 flex-grow rounded-br-2xl px-10 flex gap-10 relative">
            <div className=" flex flex-grow flex-col relative">
              <Stories />
              <div className="max-h-[63vh] scrollbar-thin overflow-y-auto">
                {/* <Trending /> */}
                <Posts />
              </div>
            </div>
            <div className="min-w-[300px] flex flex-grow flex-col justify-between">
              {/* <PopularGroups />
               */}
              <SuggestedUsers />
              <Friends />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
