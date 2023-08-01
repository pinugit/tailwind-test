import HomeSearch from "./HomeSearch";
import Liberary from "./Liberary";

const Sidebar = () => {
  const handleSelectItem = (item: string) => {
    console.log(item); // Replace with your desired logic
  };

  return (
    <div className="flex flex-col gap-2 min-w-[270px] h-screen">
      <HomeSearch onSelectingItem={handleSelectItem} />
      <Liberary />
    </div>
  );
};

export default Sidebar;
