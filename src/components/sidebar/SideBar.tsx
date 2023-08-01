import HomeSearch from "./HomeSearch";

const SideBar = () => {
  return (
    <div className="flex-col w-60 h-screen gap-3">
      <HomeSearch onSelectingItem={(item) => console.log(item)} />
      <div className="grow bg-slate-600 min-w-60 "></div>
    </div>
  );
};

export default SideBar;
