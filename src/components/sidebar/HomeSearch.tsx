import { useState } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BiSearch, BiSolidSearch } from "react-icons/bi";

interface props {
  onSelectingItem: (item: string) => void;
}
const HomeSearch = ({ onSelectingItem }: props) => {
  const [whichActive, setWhichActive] = useState("");
  return (
    <ul className="flex flex-col bg-primary rounded-md h-32 w-60 gap-5 justify-center">
      <li
        onClick={() => {
          console.log("Home");
          setWhichActive("home");
        }}
      >
        {whichActive === "home" ? (
          <div className="flex pl-4 gap-5 text-white">
            <GoHomeFill className="text-3xl " />
            <h1 className=" items-center text-xl font-bold">Home</h1>
          </div>
        ) : (
          <div className="flex pl-4 gap-5 text-text_NS hover:text-white">
            <GoHome className="text-3xl " />
            <h1 className=" items-center text-xl font-bold">Home</h1>
          </div>
        )}
      </li>
      <li
        onClick={() => {
          console.log("Search");
          setWhichActive("search");
        }}
      >
        {whichActive === "search" ? (
          <div className="flex pl-4 gap-5 text-white">
            <BiSolidSearch className="text-3xl " />
            <h1 className=" items-center text-xl font-bold">Search</h1>
          </div>
        ) : (
          <div className="flex pl-4 gap-5 text-text_NS hover:text-white">
            <BiSearch className="text-3xl " />
            <h1 className=" items-center text-xl font-bold">Search</h1>
          </div>
        )}
      </li>
    </ul>
  );
  {
  }
};

export default HomeSearch;
