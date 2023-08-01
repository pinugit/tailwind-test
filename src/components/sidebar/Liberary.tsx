import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
const Liberary = () => {
  return (
    <div className="flex flex-col text-text_NS bg-primary rounded-md text-3xl py-4">
      <div className="flex justify-between">
        {/* container for your liberary icon and text */}
        <button onClick={() => console.log("your liberary")}>
          <div className="flex items-center pl-4 gap-2 hover:text-white">
            <VscLibrary />
            <h1 className="text-lg font-bold">Your Liberary</h1>
          </div>
        </button>
        {/* container for plus icon and arrow icon */}
        <div className="flex items-center gap-1 pr-4">
          <button onClick={() => console.log("clicked on plus icon")}>
            <AiOutlinePlus className="text-2xl hover:text-white " />
          </button>
          <button onClick={() => console.log("clicked arrow")}>
            <BsArrowRightShort className="hover:text-white " />
          </button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Liberary;
