import HomeSearch from "./HomeSearch";

const Sidebar = () => {
  const handleSelectItem = (item: string) => {
    console.log(item); // Replace with your desired logic
  };

  return (
    <div className="flex flex-col gap-2 min-w-[240px] h-screen">
      <HomeSearch onSelectingItem={handleSelectItem} />
      <h1 className="grow bg-gray-950 text-cyan-200">lower-sidebar</h1>
    </div>
  );
};

export default Sidebar;
